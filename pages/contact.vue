/* eslint-disable */
<template>
  <section class="main__section">
    <div class="main__contact">
      <div class="main__contact-wrapper">
        <div class="contact">
          <div class="contact__info">
            <div class="contact__headline">
              <span class="text-2xl lg:text-5xl font-bold">
                Get in touch and let us know how we can help
              </span>
            </div>
            <div class="contact__info-list">
              <div class="contact__info-item">
                <span>Location</span>
                <p class="font-semibold text-lg">
                  Kota Jakarta Selatan,
                  <br />
                  Daerah Khusus Ibukota Jakarta 12430
                </p>
              </div>
              <div class="contact__info-item">
                <span>Email</span>
                <p class="font-semibold text-lg">info@tsmedia.id</p>
              </div>
              <div class="contact__info-item">
                <span>Mobile Phone</span>
                <div class="flex items-center gap-2">
                  <p class="font-semibold text-lg">+62 812 9862 6560</p>
                  <vs-button
                    icon
                    color="whatsapp"
                    href="https://api.whatsapp.com/send?phone=62+812-9862-6560"
                    blank
                  >
                    <i class="bx bxl-whatsapp"></i>
                  </vs-button>
                </div>
              </div>
            </div>
          </div>
          <FormulateForm
            v-model="formValues"
            class="contact__form"
            name="tsmedia-contact-form"
            @submit="handleSubmit()"
          >
            <FormulateInput
              name="name"
              placeholder="Name"
              validation="required"
              class="form__input"
            />
            <FormulateInput
              name="phoneNumber"
              placeholder="Phone Number"
              validation="required|number"
              class="form__input"
            />
            <FormulateInput
              name="email"
              placeholder="Email"
              validation="required|email"
              class="form__input"
            />
            <FormulateInput
              type="textarea"
              name="message"
              placeholder="Message"
              validation="required"
              class="form__input"
            />
            <FormulateInput
              type="submit"
              class="form__input bg-green-500 rounded py-1"
              :disabled="isLoading"
              :label="isLoading ? 'Loading' : 'Submit'"
            ></FormulateInput>
          </FormulateForm>
        </div>
      </div>
    </div>
    <div class="background">
      <div class="h-full w-full">
        <img
          class="object-cover"
          :src="require('~/assets/img/bg-gradient2.png')"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    formValues: {
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
    isLoading: false,
  }),
  mounted() {
    // this.doSubmitForm()
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.isLoading) return
        this.isLoading = true
        const scriptURL =
          'https://script.google.com/macros/s/AKfycbxUj8oAh7FTZ2mAl7qJj_IUuzSTIcJB9C2BuUlnENghs7K6ugX8pTpaGkKsQ7ophm_jMg/exec'
        const form = document.forms['tsmedia-contact-form']

        await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form),
        })
          .then((response) =>
            this.openNotification('top-center', 'success', response)
          )
          .catch((error) =>
            this.openNotification('top-center', 'danger', error)
          )
      } catch (error) {
        // Notification error
        this.openNotification('top-center', 'danger')
      } finally {
        // this.getData();
        this.isLoading = false
      }
    },
    openNotification(position = null, color, text) {
      console.log(text)
      const noti = this.$vs.notification({
        color,
        position,
        title:
          text.status === 200
            ? 'Your Form has been received'
            : `Your Form can't be received`,
        text:
          text.status === 200
            ? 'We received Your Form! Will get back to you shortly'
            : 'Retry Later or contact via Email',
      })

      return noti
    },
  },
}
</script>
<style></style>
/* eslint-disable */

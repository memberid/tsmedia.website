<template>
  <section class="main__section">
    <div class="main__contact">
      <div class="main__contact-wrapper">
        <div class="contact">
          <div class="contact__info">
            <div class="contact__headline">
              <span class="text-5xl font-bold">
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
                <p class="font-semibold text-lg">info@ts-media.com</p>
              </div>
            </div>
          </div>
          <FormulateForm v-model="formValues" class="contact__form">
            <FormulateInput
              name="name"
              placeholder="Name"
              validation="required"
              class="form__input"
            />
            <FormulateInput
              name="phoneNumber"
              placeholder="Phone Number"
              validation="required|number|max:120"
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
            <FormulateInput type="submit" class="form__input">
              <vs-button block color="dark">
                <span class="span">Submit</span>
              </vs-button>
            </FormulateInput>
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
    value4: '',
    validEmail: false,
  }),
}
</script>
<style></style>

<template>
  <section class="main__section">
    <div class="main__shop">
      <div class="main__shop-wrapper">
        <div
          v-if="Object.keys(selectedProduct).length !== 0"
          class="shop__detail"
        >
          <div class="shop__navigation mb-5">
            <vs-button color="white" transparent :to="'/shop'">
              <i class="bx bx-arrow-back text-xl"></i>
              <span class="pl-2 span font-semibold text-lg">Back</span>
            </vs-button>
          </div>
          <div class="shop__detail-body">
            <div class="shop__detail-images">
              <lingallery
                :iid.sync="currentId"
                :width="500"
                :height="500"
                :mobile-height="300"
                :mobile-height-breakpoint="400"
                responsive
                :show-controls="false"
                :items="galleryItems"
              />
            </div>
            <div class="shop__detail-content">
              <div class="shop__detail-content__head">
                <div class="shop__detail-headline">
                  <template v-if="selectedProduct['PRODUCT_DESIGN'] !== ''">
                    {{
                      selectedProduct['PRODUCT_DESIGN'] +
                      ' - ' +
                      selectedProduct['PRODUCT_NAME']
                    }}
                  </template>
                  <template v-else>
                    {{ selectedProduct['PRODUCT_NAME'] }}
                  </template>
                </div>
                <div class="shop__detail-code">
                  Product Code :
                  <template v-if="activeCode">
                    {{ activeCode }}
                  </template>
                  <template v-else>
                    {{ selectedProduct['GROUP_PRODUCT_CODE'] }}
                  </template>
                </div>
                <div class="shop__detail-price">
                  Rp{{
                    selectedProduct['SELLING_PRICE_INCLUDE_PPN'] | formatNumber
                  }}
                </div>
              </div>
              <div class="shop__detail-content__body">
                <div class="shop__detail-variant">
                  <div class="shop__detail-variant__item">
                    <span>Color :</span>
                    <div class="flex justify-start items-center flex-wrap">
                      <div
                        v-for="(color, index) in selectedProduct.customParams[
                          'color'
                        ]"
                        :key="index"
                        class="contents"
                      >
                        <vs-button
                          color="primary"
                          flat
                          :active="activeColor === color.name"
                          @click="handleSelectColor(color.name)"
                        >
                          <span
                            v-for="(item, idx) in color.name"
                            :key="idx"
                            class="font-semibold"
                          >
                            {{ item }}
                          </span>
                        </vs-button>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="variantSize.size[0] !== ''"
                    class="shop__detail-variant__item"
                  >
                    <span>Size :</span>
                    <div class="flex justify-start items-center flex-wrap">
                      <vs-button
                        v-for="(item, index) in variantSize.size"
                        :key="index"
                        color="primary"
                        flat
                        :active="activeSize === item"
                        class="font-semibold w-14"
                        @click="handleSelectSize(item)"
                      >
                        <span>
                          {{ item }}
                        </span>
                      </vs-button>
                    </div>
                  </div>
                </div>
                <!-- <div class="shop__detail-desc">
                <p>
                  {{ selectedProduct['PRODUCT_DESCRIPTION'] }}
                </p>
              </div> -->
                <div class="shop__detail-order">
                  <vs-button
                    block
                    size="lg"
                    color="whatsapp"
                    blank
                    :disabled="activeSize == '' && variantSize.size[0] !== ''"
                    @click="doOrder"
                  >
                    <i class="bx bxl-whatsapp text-xl"></i>
                    <span class="span pl-1.5 text-base font-bold">Order</span>
                  </vs-button>
                </div>
              </div>
            </div>
          </div>
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
import _ from 'lodash'

export default {
  // async asyncData({ params, $axios }) {
  //   const slug = await params // When calling /abc the slug will be "abc"
  //   const products = await $axios.$get(
  //     `/echo?user_content_key=nJxbrdt8hSERJsXNBbbz8aH2fquNg6XO75HMdNoViVWqS9xR490RU_fsao3vIKxAK5Pj95-p3PPoubDA2tTEdFpP-LQlyTDRm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP97jtFBm-0EKPxqrNC6DUfGTEoryZouciQuuB4W2pMHv28ULjR7BNEtCiI3CgbWtiZwhnCljdc4321z6NyWgk-DE0aHLwtkyQRbUtyGWuEWu9-D7D0td02GpX6tX3KFDfw&lib=M0dC36olIKwE3bfCG1qekVJ3lhmj3OVbj`
  //   )
  //   return { slug, products }
  // },
  data: () => ({
    isOpen: false,
    products: [],
    groupProducts: [],
    selectedProduct: {},
    variantSize: [],
    galleryItems: [],
    activeColor: '',
    activeSize: '',
    activeCode: '',
    currentId: null,
  }),
  computed: {},
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.isOpen = false
      const loading = this.$vs.loading()
      try {
        const comp = this
        const url = `https://script.google.com/macros/s/AKfycbwS54Z4fIMAHFxJhYrnbO1pTr-NzbutQiTO1njHPY-SpV9q-o9teWyosCGJYpSBsvLNHw/exec`
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onload = await function () {
          if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
              comp.products = JSON.parse(this.responseText)
              comp.isOpen = true
              setTimeout(() => {
                comp.getDataProduct()
                comp.getSelectedDataProduct()
                loading.close()
              }, 1000)
            } else {
              console.log(this.status, this.statusText)
            }
          }
        }
        xhr.onerror = () => console.log(xhr.response)
        xhr.send(null)
      } catch (error) {
        console.log(error)
      } finally {
        console.log(this.$data)
        this.isOpen = true
      }
    },
    getDataProduct() {
      this.products = _.filter(this.products.products, ['PUBLISH', 'YES'])

      const selectedGroupProduct = _.groupBy(this.products, (item) => {
        return `"${item.GROUP_PRODUCT_CODE}"`
      })

      let listGroupProductCode = []
      listGroupProductCode = _.uniqBy(
        _.map(this.products, (item) => {
          return {
            name: item.GROUP_PRODUCT_CODE,
          }
        }),
        'name'
      )

      let selectedProduct = []
      selectedProduct = _.map(listGroupProductCode, (item) => {
        // filter color
        // const sizeAvailable = _.map(
        //   selectedGroupProduct[`"${item.name}"`],
        //   (item) => `"${item.PRODUCT_SIZE}"`
        // )

        // filter color size by color name
        let colorSizebyName = []
        colorSizebyName = _.map(
          _.groupBy(
            selectedGroupProduct[`"${item.name}"`],
            (item) => `"${item.PRODUCT_COLOR}"`
          ),
          (item) => {
            return {
              name: _.uniq(
                _.map(item, (itemChild2) => {
                  return itemChild2.PRODUCT_COLOR
                })
              )[0],
              size: _.uniq(
                _.map(item, (itemChild2) => {
                  return itemChild2.PRODUCT_SIZE
                })
              ),
            }
          }
        )

        let getLastData = []
        getLastData = _.maxBy(selectedGroupProduct[`"${item.name}"`], 'NO.')

        return {
          ...getLastData,
          customParams: {
            groupCode: item.name,
            color: [...colorSizebyName],
            similiarList: selectedGroupProduct[`"${item.name}"`],
          },
        }
      })

      this.groupProducts = selectedProduct
    },
    getSelectedDataProduct() {
      this.isOpen = false
      const selectData = _.filter(this.groupProducts, [
        'GROUP_PRODUCT_CODE',
        this.$route.params.code,
      ])
      this.selectedProduct = selectData[0]

      const dataList = _.uniqBy(
        this.selectedProduct.customParams.similiarList,
        'PRODUCT_COLOR'
      )

      console.log(dataList)

      if (
        _.find(dataList, function (o) {
          return o.URL_IMAGE.includes(', ')
        })
      ) {
        if (
          _.find(dataList, function (o) {
            return !o.URL_IMAGE.includes(', ')
          })
        ) {
          console.log('Multiple Images')
          let splitImages = _.filter(dataList, function (o) {
            return o.URL_IMAGE.includes(', ')
          })[0]
          splitImages = splitImages.URL_IMAGE.split(', ')

          let otherImage = _.filter(dataList, function (o) {
            return !o.URL_IMAGE.includes(', ')
          })
          otherImage = _.map(otherImage, (item) => {
            return item.URL_IMAGE
          })

          this.galleryItems = [...splitImages, ...otherImage]

          this.galleryItems = _.map(this.galleryItems, (item, index) => {
            return {
              src: item,
              thumbnail: item,
              id: index + 1,
            }
          })
          console.log(this.galleryItems)
        } else {
          let splitImages = _.filter(dataList, function (o) {
            return o.URL_IMAGE.includes(', ')
          })[0]
          splitImages = splitImages.URL_IMAGE.split(', ')

          this.galleryItems = _.map(splitImages, (item, index) => {
            return {
              src: item,
              thumbnail: item,
              id: index + 1,
            }
          })
        }
      } else {
        this.galleryItems = _.map(dataList, (item) => {
          return {
            src:
              'https://drive.google.com/uc?export=view&id=' +
              item.ID_IMAGE_GDRIVE1,
            thumbnail: item.URL_IMAGE,
            id: item['NO.'],
          }
        })
      }

      // const selectImages = _.map(dataList, (item) => {

      //     return {
      //         src:
      //           'https://drive.google.com/uc?export=view&id=' +
      //           item.ID_IMAGE_GDRIVE1,
      //         thumbnail: item.URL_IMAGE,
      //         id: item['NO.'],
      //       }
      //   })

      this.activeColor = this.selectedProduct.customParams.color[0].name

      this.variantSize = _.filter(this.selectedProduct.customParams.color, [
        'name',
        this.activeColor,
      ])[0]

      this.variantSize.size = this.variantSize.size.sort().reverse()
      // this.galleryItems = selectImages
      this.isOpen = true
    },
    handleSelectColor(name) {
      this.activeColor = name
      // const sizeList = _.filter(
      //   this.selectedProduct.customParams.similiarList,
      //   ['PRODUCT_COLOR', name]
      // )

      if (this.activeSize !== '') {
        this.handleSelectSize(this.activeSize)
      }
    },
    handleSelectSize(name) {
      this.activeSize = name
      const selectData = _.find(
        this.selectedProduct.customParams.similiarList,
        { PRODUCT_COLOR: this.activeColor, PRODUCT_SIZE: this.activeSize }
      )

      this.activeCode = selectData.PRODUCT_CODE
    },
    doOrder() {
      let message = ''
      message = `Halo, Saya tertarik untuk membeli,%0ANama Produk : ${this.selectedProduct.PRODUCT_DESIGN} - ${this.selectedProduct.PRODUCT_NAME},%0AKode Produk : ${this.activeCode},%0AWarna : ${this.activeColor}`
      if (this.variantSize.size[0] !== '') {
        const size = `,%0AUkuran : ${this.activeSize}`
        message = message + size
      }
      message = message.split(' ').join('%20')

      const link =
        'https://api.whatsapp.com/send?phone=6281298626560' + '&text=' + message
      window.open(link)
    },
  },
}
</script>
<style></style>

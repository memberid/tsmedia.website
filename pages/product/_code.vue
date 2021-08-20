<template>
  <section v-if="isOpen" class="main__section">
    <div class="main__shop">
      <div class="main__shop-wrapper">
        <div class="shop__detail">
          <div class="shop__detail-body">
            <div class="shop__detail-images">
              <div class="shop__navigation mb-5">
                <vs-button color="white" transparent :to="'/shop'">
                  <i class="bx bx-arrow-back text-xl"></i>
                  <span class="pl-2 span font-semibold text-lg">Back</span>
                </vs-button>
              </div>
              <lingallery
                :iid.sync="currentId"
                :width="500"
                :height="500"
                :mobile-height="300"
                :mobile-height-breakpoint="400"
                :show-controls="false"
                :items="galleryItems"
              />
              {{ currentId }}
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
                  {{ selectedProduct['GROUP_PRODUCT_CODE'] }}
                </div>
                <div class="shop__detail-price">
                  Rp.{{
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
                          @click="handleVariantSize(color.name)"
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
                        @click="activeSize = item"
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
                    :href="'https://wa.me/6281298626560'"
                    blank
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
  async asyncData({ params, $axios }) {
    const slug = await params // When calling /abc the slug will be "abc"
    const products = await $axios.$get(
      `/echo?user_content_key=FQu_21mEly0EEwr1DCe84zCZvc_HHQVXoFvnF9gM7hwLGT_6zkLPdS3GBnp5GpwGMyAihTQYrqd-Yf81coxJdKYJsVjwS38lm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP97jtFBm-0EKPxqrNC6DUfGTEoryZouciQuuB4W2pMHv28ULjR7BNEtCiI3CgbWtiZwhnCljdc4321z6NyWgk-DE0aHLwtkyQRbUtyGWuEWu9-D7D0td02GpX6tX3KFDfw&lib=M0dC36olIKwE3bfCG1qekVJ3lhmj3OVbj`
    )
    return { slug, products }
  },
  data: () => ({
    isOpen: false,
    products: [],
    groupProducts: [],
    selectedProduct: {},
    variantSize: [],
    galleryItems: [],
    activeColor: '',
    activeSize: '',
    currentId: null,
  }),
  computed: {},
  async mounted() {
    await this.getDataProduct()
    this.getSelectedDataProduct()
  },
  methods: {
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
        this.slug.code,
      ])
      this.selectedProduct = selectData[0]

      const dataList = _.uniqBy(
        this.selectedProduct.customParams.similiarList,
        'PRODUCT_COLOR'
      )

      const selectImages = _.map(dataList, (item) => {
        return {
          src: item.URL_IMAGE,
          thumbnail: item.URL_IMAGE,
          id: item['NO.'],
        }
      })

      this.activeColor = this.selectedProduct.customParams.color[0].name
      console.log(selectImages)
      this.galleryItems = selectImages
      this.handleVariantSize(this.activeColor)
      this.isOpen = true
    },
    handleVariantSize(name) {
      this.activeColor = name
      // const sizeList = _.filter(
      //   this.selectedProduct.customParams.similiarList,
      //   ['PRODUCT_COLOR', name]
      // )
      this.variantSize = _.filter(this.selectedProduct.customParams.color, [
        'name',
        name,
      ])[0]

      this.variantSize.size = this.variantSize.size.sort().reverse()

      console.log(this.galleryItems, this.currentId)
    },
  },
}
</script>
<style></style>

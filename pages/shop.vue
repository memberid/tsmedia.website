<template>
  <section class="main__section">
    <div class="main__shop">
      <div class="main__shop-wrapper">
        <div class="banner-slider">
          <vue-glide
            :keyboard="false"
            :per-view="1"
            bullet="true"
            type="slider"
            :autoplay="5000"
          >
            <vue-glide-slide v-for="(item, idx) in banners.shop" :key="idx">
              <div class="banner">
                <div class="banner__image">
                  <a :href="item.link" target="_blank">
                    <img
                      class="h-full w-full object-left object-cover"
                      :src="item.image.url"
                    />
                  </a>
                </div>
              </div>
            </vue-glide-slide>
            <!-- <template slot="control">
            <div data-glide-el="controls" class="banner__controls">
              <vs-button
                id="prev"
                icon
                color="#ffffff"
                data-glide-dir="<"
                @click="handleControlCarousel('prev')"
              >
                <i class="bx bxs-chevron-left"></i>
              </vs-button>
              <vs-button
                id="next"
                icon
                color="#ffffff"
                data-glide-dir=">"
                @click="handleControlCarousel('next')"
              >
                <i class="bx bxs-chevron-right"></i>
              </vs-button>
            </div>
          </template> -->
          </vue-glide>
        </div>
        <div class="shop">
          <div class="shop__headline">
            <span class="font-bold text-2xl text-white">
              Results - {{ filterProducts.length }} items
            </span>
            <vs-select
              v-model="activeFilterSort"
              block
              placeholder="Sort By"
              state
              @change="handleFilterSort"
            >
              <vs-option
                v-for="(item, idx) in filterSort"
                :key="idx"
                :label="item.name"
                :value="item.name"
              >
                {{ item.name }}
              </vs-option>
            </vs-select>
          </div>
          <div class="shop-wrapper">
            <div class="shop__category">
              <div
                class="flex items-baseline justify-between cursor-pointer"
                @click="openCategory = !openCategory"
              >
                <span class="mb-4 font-bold text-2xl text-white">Category</span>
                <i
                  class="bx font-bold text-2xl"
                  :class="[openCategory ? ' bx-chevron-up' : 'bx-chevron-down']"
                ></i>
              </div>
              <div v-if="openCategory" class="shop__category-list">
                <div
                  v-for="(item, idx) in categories"
                  :key="idx"
                  class="shop__category-item"
                >
                  <vs-button
                    color="#ffffff"
                    transparent
                    :active="activeCategory === item.name"
                    @click="handleFilterCategory(item.name)"
                  >
                    <span class="font-semibold text-base uppercase">
                      {{ item.name }}
                    </span>
                  </vs-button>
                </div>
              </div>
            </div>
            <template v-if="filterProducts.length == 0">
              <div class="shop__empty-state">
                <span class="font-bold text-2xl text-white">
                  Couldn't find the product
                </span>
              </div>
            </template>
            <template v-else>
              <div ref="product" class="card__list">
                <!-- <div
                v-for="(item, idx2) of groupProducts[
                  `&quot;${design.name}&quot;`
                ]"
                :key="idx2"
              >
                {{ item }}
              </div> -->
                <!-- {{ items.list }} -->
                <vs-card
                  v-for="(items, idx) in filterProducts"
                  :key="idx"
                  class="card__item"
                  @click="goToDetail(items.GROUP_PRODUCT_CODE)"
                >
                  <template #title>
                    <span class="text-sm sm:text-base font-bold capitalize">
                      <template v-if="items['PRODUCT_DESIGN'] !== ''">
                        {{
                          items['PRODUCT_DESIGN'] +
                          ' - ' +
                          items['PRODUCT_NAME']
                        }}
                      </template>
                      <template v-else>
                        {{ items['PRODUCT_NAME'] }}
                      </template>
                    </span>
                  </template>
                  <template #img>
                    <img :src="handleImageProduct(items['URL_IMAGE'])" alt="" />
                  </template>
                  <template #text>
                    <div class="card__item-content space-y-1.5">
                      <div class="gap-1 text-sm">
                        <!-- Product Code:
                        {{ items.GROUP_PRODUCT_CODE }}
                        <br /> -->
                        Color :
                        <div
                          v-for="(color, index) in items.customParams['color']"
                          :key="index"
                          class="inline-flex"
                        >
                          <span v-for="(item, idx) in color.name" :key="idx">
                            {{ item }}
                          </span>
                          <span
                            v-if="
                              index !== items.customParams['color'].length - 1
                            "
                            class="pr-1"
                          >
                            ,
                          </span>
                        </div>
                      </div>
                      <div
                        class="text-base sm:text-xl font-bold pt-2 pb-2 sm:pb-6"
                      >
                        Rp
                        {{ items['SELLING_PRICE_INCLUDE_PPN'] | formatNumber }}
                      </div>
                    </div>
                  </template>
                  <!-- <template #interactions>
                    <div class="m-4">
                      <vs-button color="dark">
                        <span class="span">Out of Stock</span>
                      </vs-button>
                    </div>
                  </template> -->
                  <!-- <template #buttons>
                    <div class="flex w-2/3 lg:w-1/3 ml-auto pb-2 px-2">
                      <vs-button
                        block
                        color="dark"
                        :to="'/product/' + items.GROUP_PRODUCT_CODE"
                      >
                        <span class="span">Order</span>
                      </vs-button>
                    </div>
                  </template> -->
                </vs-card>
              </div>
            </template>
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
  async asyncData({ $axios, $config }) {
    const banners = await $axios
      .$get(`${$config.baseURL}/banners`)
      .then((res) => res)

    console.log(banners)

    return { banners }
  },
  data: () => ({
    banners: [
      {
        title: 'banner 1',
        bannerImg: require('~/assets/img/merc/merc-banner.png'),
      },
    ],
    products: [],
    groupProducts: [],
    filterProducts: [],
    categories: [],
    activeCategory: '',
    activeFilterSort: 'New Arrival',
    openCategory: true,
    filterSort: [
      {
        name: 'New Arrival',
      },
      {
        name: 'Price : Low to High',
      },
      {
        name: 'Price : High to Low',
      },
    ],
  }),
  async created() {
    await this.fetchData()
  },
  async mounted() {
    // get category by design name
    // this.categoryDesigns = _.uniqBy(
    //   _.map(this.products, (item) => {
    //     return {
    //       name: item.PRODUCT_DESIGN,
    //     }
    //   }),
    //   'name'
    // )
  },
  methods: {
    fetchData() {
      const loading = this.$vs.loading()
      try {
        const comp = this
        const url = `https://script.google.com/macros/s/AKfycbwS54Z4fIMAHFxJhYrnbO1pTr-NzbutQiTO1njHPY-SpV9q-o9teWyosCGJYpSBsvLNHw/exec`
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onload = function () {
          if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
              comp.products = JSON.parse(this.responseText)
              comp.getCategories()
              comp.getDataProduct()
              comp.handleFilterSort(comp.activeFilterSort)
              comp.isOpen = true
              setTimeout(() => {
                loading.close()
              }, 500)
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
        console.log('fetchData Shop')
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
              ),
              size: _.uniq(
                _.map(item, (itemChild2) => {
                  return itemChild2.PRODUCT_SIZE
                })
              ),
            }
          }
        )

        let checkStock = []
        checkStock = _.map(selectedGroupProduct[`"${item.name}"`], (item) => {
          return {
            stock: item.ENDING_INVENTORY,
          }
        })

        let getLastData = []
        getLastData = _.maxBy(selectedGroupProduct[`"${item.name}"`], 'NO.')

        return {
          ...getLastData,
          customParams: {
            groupCode: item.name,
            color: [...colorSizebyName],
            checkStockAvailable: checkStock,
            similiarList: selectedGroupProduct[`"${item.name}"`],
          },
        }
      })

      this.groupProducts = selectedProduct
      console.log(this.groupProducts)
    },
    getCategories() {
      let filterForCategories = []
      filterForCategories = _.filter(this.products.products, [
        'STATUS_PUBLISH',
        'YES',
      ])
      this.categories = _.uniqBy(
        _.map(filterForCategories, (item) => {
          return {
            name: item['SUB-CATEGORY'],
          }
        }),
        'name'
      )
      this.categories = [{ name: 'ALL' }, ...this.categories]
    },
    handleControlCarousel(event) {
      if (event === 'next') {
        this.navCarousel = (this.navCarousel + 1) % this.banners.length
      } else {
        this.navCarousel = (this.navCarousel - 1) % this.banners.length
        if (this.navCarousel < 0) {
          this.navCarousel = this.banners.length - 1
        }
      }
    },
    handleFilterSort(value) {
      const loading = this.$vs.loading()

      if (value === 'Price : High to Low') {
        this.filterProducts = _.orderBy(
          this.groupProducts,
          ['SELLING_PRICE'],
          ['desc', 'asc']
        )
        setTimeout(() => {
          loading.close()
          return this.filterProducts
        }, 500)
      } else if (value === 'Price : Low to High') {
        this.filterProducts = _.orderBy(
          this.groupProducts,
          ['SELLING_PRICE'],
          ['asc', 'desc']
        )
        setTimeout(() => {
          loading.close()
          return this.filterProducts
        }, 500)
      } else if (value === 'New Arrival') {
        // New Arrival
        this.filterProducts = _.orderBy(
          this.groupProducts,
          ['NO.'],
          ['desc', 'asc']
        )
        setTimeout(() => {
          loading.close()
          return this.filterProducts
        }, 500)
      }
    },
    handleFilterCategory(value) {
      const loading = this.$vs.loading()
      this.activeCategory = value
      if (value === 'ALL') {
        const filter = _.filter(this.groupProducts, 'SUB-CATEGORY')

        setTimeout(() => {
          loading.close()
          return (this.filterProducts = filter)
        }, 500)
      } else {
        const filter = _.filter(this.groupProducts, { 'SUB-CATEGORY': value })
        setTimeout(() => {
          loading.close()
          return (this.filterProducts = filter)
        }, 500)
      }
    },
    handleImageProduct(data) {
      if (data.includes(',')) {
        return data.split(', ')[0]
      } else {
        return data
      }
    },
    goToDetail(to) {
      this.$router.push({
        path: '/product/' + to,
      })
    },
  },
}
</script>
<style></style>

<template>
  <div>
    <div class="relative bg-gray-50 overflow-hidden">
      <div
        class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div class="relative h-full max-w-7xl mx-auto">
          <svg
            class="
              absolute
              right-full
              transform
              translate-y-1/4 translate-x-1/4
              lg:translate-x-1/2
            "
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="
              absolute
              left-full
              transform
              -translate-y-3/4 -translate-x-1/4
              md:-translate-y-1/2
              lg:-translate-x-1/2
            "
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div class="relative bg-indigo-brand pt-6 pb-16 sm:pb-24">
        <Popover>
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              class="
                relative
                flex
                items-center
                justify-between
                sm:h-10
                md:justify-center
                
              "
              aria-label="Global"
            >
              <div
                class="
                  flex
                  items-center
                  flex-1
                  md:absolute
                  md:inset-y-0
                  md:left-0
                "
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton
                      class="
                        bg-gray-50
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500
                        hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2 focus:ring-inset focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img
                      class="h-8 w-auto sm:h-10"
                      src="../assets/logo2.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <!-- <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.href }" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a> -->
                <router-link
                  class="font-medium text-white hover:text-gray-900"
                  :to="{ name: 'productList' }"
                  >View Product List</router-link
                >
              </div>
              <div
                class="
                  hidden
                  md:absolute
                  md:flex
                  md:items-center
                  md:justify-end
                  md:inset-y-0
                  md:right-0
                "
              >
                <span class="inline-flex rounded-md shadow">
                  <router-link
                    :to="{ name: 'login' }"
                    class="
                      inline-flex
                      items-center
                      px-4
                      py-2
                      border border-transparent
                      text-base
                      font-medium
                      rounded-md
                      text-indigo-600
                      bg-white
                      hover:bg-gray-50
                    "
                  >
                    Log in
                  </router-link>
                </span>
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="
                absolute
                z-10
                top-0
                inset-x-0
                p-2
                transition
                transform
                origin-top-right
                md:hidden
              "
            >
              <div
                class="
                  rounded-lg
                  shadow-md
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  overflow-hidden
                "
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500
                        hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2 focus:ring-inset focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="
                      block
                      px-3
                      py-2
                      rounded-md
                      text-base
                      font-medium
                      text-gray-700
                      hover:text-gray-900
                      hover:bg-gray-50
                    "
                    >{{ item.name }}</a
                  >
                </div>
                <a
                  href="#"
                  class="
                    block
                    w-full
                    px-5
                    py-3
                    text-center
                    font-medium
                    text-indigo-600
                    bg-gray-50
                    hover:bg-gray-100
                  "
                >
                  Log in
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div class="text-center">
            <h1
              class="
                text-4xl
                tracking-tight
                font-extrabold
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block xl:inline">Supply chain data to build trust within the</span>
              {{ " " }}
              <span class="block text-green-brand xl:inline"
                >hemp industry</span
              >
            </h1>
            <p
              class="
                mt-3
                max-w-md
                mx-auto
                text-base text-white
                sm:text-lg
                md:mt-5
                md:text-xl
                md:max-w-3xl
              "
            >
              Clear chain of custody. Accurate product information.
            </p>
            <div
              class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <div class="rounded-md shadow">
                <router-link
                  :to="{ name: 'productList' }"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-indigo-brand
                    bg-green-brand

                    hover:bg-green-700
                    md:py-4
                    md:text-lg
                    md:px-10
                  "
                >
                 Get Started 
                </router-link>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a  
                target="_blank"
                href="https://drive.google.com/file/d/1s3z9O1PQJuDYx3Bde-LUNDacVV_KaUN9/view?usp=sharing"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-indigo-600
                    bg-white
                    hover:bg-gray-50
                    md:py-4
                    md:text-lg
                    md:px-10
                  "
                >
                  View Concept Deck
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900">How it works</h2>
            <p class="mt-4 text-lg text-gray-500">
              Have more questions about the product? Check out the source code on 
              <a
                href="https://github.com/reidjs/gs1"
                class="font-medium text-indigo-600 hover:text-indigo-500"
                >GitHub</a
              >
            </p>
          </div>
          <div class="mt-12 lg:mt-0 lg:col-span-2">
            <dl class="space-y-12">
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Due to restrictions around traditional marketing tactics, how can CBD brands leverage technology solutions combined with GS1 Standards to educate and engage more efficiently with new customers about the trustworthiness of their products? 
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                 Our product combined with GS1 standards helps better educate new customers through our end-to-end traceability feature. We give clear and trackable detail of how a customer’s hemp was processed, who touched it, and what verified lab certified it. 
                </dd>
              </div>
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  How can CBD brands better tell their “traceability stories” to discerning customers?
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  ClearHemp can better tell a traceability story through a customer friendly portal of their hemp. A QR code on the side allows customers to easily see and interact with the full journey of their product.                </dd>
              </div>
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  How can CBD brands use technology combined with GS1 Standards to build loyalty among their seasoned customers, particularly as the industry braces for potential disruption?

                </dt>
                <dd class="mt-2 text-base text-gray-500">
CBD brands can use ClearHemp’s integrated product with GS1 standards to build loyalty by removing any legal troubles when transporting the product. Our solution can give law enforcement clear visibility to whether this product is hemp or cannabis as well as if it is abiding by the regulations. Thus, customers and companies can avoid any legal troubles with our product. 
                </dd>
              </div>
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  How can consumers be sure a Certificate of Analysis (COA) is real and trustworthy?
                </dt>
                <dd class="mt-2 text-base text-gray-500">
Using a network of trusted and accredited 3rd-party labs within ClearHemp’s network, customers can be sure a COA is real through the ease of access into a company’s physical location, its name, and contact details.
                </dd>
              </div>
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  If a COA is a rare trust anchor in this complicated industry, how can CBD brands leverage technology combined with GS1 Standards?
                </dt>
                <dd class="mt-2 text-base text-gray-500">
CBD brands can use ClearHemp’s solution to gain trust by using a trackable and end-to-end digital solution. The information includes where it was grown, the extraction method, who processed it, what lab tested it and how it moved through the supply chain                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer class="text-center m-4">
      <button @click="seed">Reset database</button>
    </footer> -->
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
import { MenuIcon, XIcon } from "@heroicons/vue/outline"
import utils from "../utils"

const navigation = [{ name: "Products", href: "product" }]
const faqs = [
  {
    question: "How do you use the app?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      navigation,
      faqs,
    }
  },
  mounted() {
    this.seed = utils.seed
  },
}
</script>
<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <Component v-bind="buttonProps" :class="buttonClass ? buttonClass : ['app-button', extraClass, size]">
    <Component :is="icon" v-if="icon" class="mr-2 icon" :class="size" />

    <Markdown unwrap="p" />

    <IconExternalLink v-if="externalIcon" class="ml-2 icon" :class="size" />
  </Component>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    externalIcon: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    icon: {
      type: String,
      default: ''
    },
    extraClass: {
      type: String,
      default: 'app-button-primary-color'
    },
    buttonClass: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const buttonProps = computed(() => {
      const { to, href } = props
      if (to?.length) {
        return {
          is: 'AppLink',
          to
        }
      } else if (href?.length) {
        return {
          is: 'AppLink',
          href
        }
      } else {
        return {
          is: 'button'
        }
      }
    })

    return {
      buttonProps
    }
  }
})
</script>


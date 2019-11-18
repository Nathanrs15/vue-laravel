<template>
  <v-card v-bind="$attrs" :style="styles" v-on="$listeners">
    <helper-offset :inline="inline" :full-width="fullWidth" :offset="offset">
      <v-card
        :color="color"
        :class="`elevation-${elevation}`"
        class="v-card--material__header"
        dark
      >
        <v-icon size="40">{{ icon }}</v-icon>
        <div class="text-xs-right">
          <p class="category grey--text font-weight-light" v-text="title" />
          <h3 class="title display-1 font-weight-light">
            {{ value }}
            <small>{{ smallValue }}</small>
          </h3>
        </div>
      </v-card>
    </helper-offset>

    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>
<script>
import Card from "./Card";

export default {
  inheritAttrs: false,

  props: {
    icon: {
      type: String,
      required: true
    },
    subIcon: {
      type: String,
      default: undefined
    },
    subIconColor: {
      type: String,
      default: undefined
    },
    subTextColor: {
      type: String,
      default: undefined
    },
    subText: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    },
    smallValue: {
      type: String,
      default: undefined
    }, //
    color: {
      type: String,
      default: "secondary"
    },
    elevation: {
      type: [Number, String],
      default: 10
    },
    inline: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    offset: {
      type: [Number, String],
      default: 24
    },
    title: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    }
  },

  computed: {
    hasOffset() {
      //   return (
      //     this.$slots.header || this.$slots.offset || this.title || this.text
      //   );
      return false;
    },
    styles() {
      if (!this.hasOffset) return null;

      return {
        marginBottom: `${this.offset}px`,
        marginTop: `${this.offset * 2}px`
      };
    }
  }
};
</script>

<style lang="scss">
.v-card--material {
  &__header {
    &.v-card {
      border-radius: 4px;
    }
  }
}
</style>

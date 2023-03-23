import { u as useHead, _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import "ohmyfetch";
import "ufo";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "destr";
import "h3";
import "defu";
import "@vue/shared";
const FORMSPARK_ACTION_URL = "https://submit-form.com/WgQ3uShk";
const __default__ = {
  data() {
    return {
      full_name: "",
      email: ""
    };
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          full_name: this.full_name,
          email: this.email
        })
      });
      this.$router.push("/thank-you-beta");
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Alun - Music App for Your Well-Being Acivities",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "description",
          content: "AI generated ambient sound that's personalized to improve your mental health daily activities."
        }
      ],
      bodyAttrs: {
        class: "alun"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHerobeta = __nuxt_component_0;
      const _component_HomeAbout = __nuxt_component_1;
      const _component_HomeIntro = __nuxt_component_2;
      const _component_HomeReinforcement = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeHerobeta, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeReinforcement, null, null, _parent));
      _push(`<div id="beta" class="bg-black"><div class="container col-xl-10 col-xxl-8 px-4 py-5"><div class="row align-items-center g-lg-5 py-5"><div class="col-lg-7 text-center text-lg-start text-white"><h1 class="display-4 fw-bold lh-1 mb-3"> Join Our Beta Testing Program </h1><p class="col-lg-10 fs-4"> Be the first person to get early access as beta tester of Alun App </p></div><div class="col-md-10 mx-auto col-lg-5"><form data-formtrack class="p-4 p-md-5 border rounded-3 bg-white"><input type="checkbox" name="_alunhoney" style="${ssrRenderStyle({ "display": "none" })}" tabindex="-1" autocomplete="off"><div class="form-floating mb-3"><input${ssrRenderAttr("value", _ctx.full_name)} type="full_name" class="form-control" id="floatingName" placeholder="Your Name" required><label for="floatingName">Your Name</label></div><div class="form-floating mb-3"><input${ssrRenderAttr("value", _ctx.email)} type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required><label for="floatingEmail">Email address</label></div><button class="w-100 btn btn-lg btn-dark" type="submit"> Sign up </button><hr class="my-4"><small class="text-muted">By clicking Sign up, you agree to the terms of use.</small></form></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.480ac271.js.map

import { _ as _export_sfc, a as __nuxt_component_0, b as __nuxt_component_1, c as __nuxt_component_2, d as __nuxt_component_3 } from "../server.mjs";
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
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HomeHerobeta = __nuxt_component_0;
  const _component_HomeAbout = __nuxt_component_1;
  const _component_HomeIntro = __nuxt_component_2;
  const _component_HomeReinforcement = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HomeHerobeta, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeIntro, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeReinforcement, null, null, _parent));
  _push(`<div id="beta" class="bg-black"><div class="container col-xl-10 col-xxl-8 px-4 py-5"><div class="row align-items-center g-lg-5 py-5"><div class="col-lg-7 text-center text-lg-start text-white"><h1 class="display-4 fw-bold lh-1 mb-3"> Bergabunglah dalam program beta kami </h1><p class="col-lg-10 fs-4"> Jadilah salah satu dari yang pertama mencoba aplikasi Alun dengan mendaftarkan diri dalam program uji coba versi beta.</p></div><div class="col-md-10 mx-auto col-lg-5"><form data-formtrack class="p-4 p-md-5 border rounded-3 bg-white"><input type="checkbox" name="_alunhoney" style="${ssrRenderStyle({ "display": "none" })}" tabindex="-1" autocomplete="off"><div class="form-floating mb-3"><input${ssrRenderAttr("value", $data.full_name)} type="full_name" class="form-control" id="floatingName" placeholder="Your Name" required><label for="floatingName">Nama Anda</label></div><div class="form-floating mb-3"><input${ssrRenderAttr("value", $data.email)} type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required><label for="floatingEmail">Alamat e-mail</label></div><button class="w-100 btn btn-lg btn-dark" type="submit"> Sign up </button><hr class="my-4"><small class="text-muted">Dengan mengisi form ini, Anda menyetujui layanan dan ketentuan Alun</small></form></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.14a91ecb.js.map

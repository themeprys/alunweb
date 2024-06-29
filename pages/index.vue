<template>
  <div>
    <HomeHerobeta />
    <HomeAbout />
    <HomeIntro />
    <HomeReinforcement />

    <!-- <div id="beta" class="bg-black">
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start text-white">
            <h1 class="display-4 fw-bold lh-1 mb-3">
              Bergabunglah dalam program beta kami
            </h1>
            <p class="col-lg-10 fs-4">
              Jadilah salah satu dari yang pertama mencoba aplikasi Alun dengan mendaftarkan diri dalam program uji coba
              versi beta.</p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form @submit.prevent="submitForm" data-formtrack class="p-4 p-md-5 border rounded-3 bg-white">
              <input type="checkbox" name="_alunhoney" style="display: none" tabindex="-1" autocomplete="off" />
              <div class="form-floating mb-3">
                <input v-model="full_name" type="full_name" class="form-control" id="floatingName" placeholder="Your Name"
                  required />
                <label for="floatingName">Nama Anda</label>
              </div>
              <div class="form-floating mb-3">
                <input v-model="email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com"
                  required />
                <label for="floatingEmail">Alamat e-mail</label>
              </div>
              <button class="w-100 btn btn-lg btn-dark" type="submit">
                Sign up
              </button>
              <hr class="my-4" />
              <small class="text-muted">Dengan mengisi form ini, Anda menyetujui <a href data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop">Ketentuan dan Layanan</a> Alun</small>
            </form>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Ketentuan dan Layanan Alun App</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>Pendahuluan</strong></p>
            <p>Dengan mengakses dan menggunakan fitur situs web ini berarti Anda telah menyetujui, menerima, dan mematuhi
              syarat-syarat penggunaan yang kami terapkan pada situs ini. Mohon baca halaman ini dengan seksama.
              Syarat-syarat penggunaan ini berlaku efektif mulai tanggal 1 Juni 2023</p>
            <p>Alun App adalah aplikasi musik berisi instrumen musik nusantara yang dikreasikan oleh kecerdasan buatan
              (AI) dan dipersonalisasi untuk membantu mengoptimalkan kesehatan mental penggunanya. Format konten yang
              disediakan antara lain audio, teks foto dan grafis, dan video.</p>
            <p><strong>Tentang Layanan Situs</strong></p>
            <p>Situs Alun App dapat digunakan oleh khalayak umum dari berbagai profesi, kalangan masyarakat dan usia.
              Tanpa memberitahukan terlebih dahulu, kami berhak menarik atau mengubah layanan yang kami sediakan di situs
              Alun App di masa mendatang. Kami tidak bertanggung jawab apabila layanan situs Alun App tidak tersedia pada
              saat kapanpun dan untuk berapa lama karena alasan tertentu, semisal kegagalan server, koneksi atau perubahan
              tautan url konten.</p>
            <p><strong>Tentang Konten Situs &amp; Hak Cipta</strong></p>
            <p>Konten dari situs Alun App disajikan dari kreasi seniman dan musisi yang diolah lewat kecerdasan buatan,
              kiriman naskah opini kontributor yang telah melewati proses seleksi dan akurasi data recheck, serta hasil
              kerja riset redaksi baik berupa editorial, kolom, feature, berita lempang (straight news), berita mendalam
              (indepth news) dan hasil penelitian.</p>
            <p>Kecuali konten hasil kerja redaksi atau disebutkan sumbernya, isi setiap konten situs Alun App adalah
              pendapat pribadi masing-masing kontributor dan tidak mencerminkan/mewakili pendapat redaksi atau para
              kontributor yang lain. Konten dapat berubah setiap saat karena kami secara berkala memperbaharui dan
              memperbaiki fitur dan tautan url konten situs Alun App.</p>
            <p>Alun App juga melindungi hak cipta konten dengan menggunakan lisensi hak cipta penuh. Dalam artian seluruh
              konten di situs Alun App tidak boleh disebarluaskan tanpa seizin pihak pengelola Alun
              App.<strong><br /></strong></p>
            <p><strong>Tentang Informasi Pengunjung</strong><br /><br />Situs Alun App dilengkapi dengan fitur analisis
              yang dapat membaca aktivitas dan sebaran wilayah pengunjung. Sistem kami juga otomatis mencatat informasi
              seperti IP Address yang Anda gunakan saat mengakses situs ini demi mencegah kemungkinan aksi cracking situs
              atau hal lain yang dapat menyebabkan perusakan atau pengubahan situs secara ilegal.</p>
            <p>Situs Alun App juga menyimpan informasi pribadi Anda seperti alamat email, profil dan password rahasia pada
              saat Anda mendaftar sebagai member. Anda diwajibkan untuk memelihara/menjaga kerahasiaan akun dan password
              Anda. Jangan menggunakan password yang mudah ditebak oleh orang lain seperti tanggal lahir Anda, serta
              jangan lupa untuk me-log out akun Anda apabila Anda menggunakan komputer milik umum. Alun App akan menyimpan
              dan mengelola data pribadi Anda dengan baik dan tidak digunakan untuk kepentingan lain atau diperjual
              belikan.</p>
            <p><strong>Tentang Hak Jawab</strong></p>
            <p>Pengelola situs Alun App menerima laporan, keluhan atau tanggapan publik terkait dengan seluruh konten yang
              ada di situs Alun App. Publik berhak mendapatkan hak jawab bila ada konten yang dirasa merugikan individu
              atau pihak tertentu dengan pemuatan surat jawab secara terbuka di situs Alun App.</p>
            <p><strong>Tautan url Dari Situs Web Kami</strong></p>
            <p>Pada konten situs Alun App terdapat beberapa tautan url yang menuju situs lain (eksternal) dan dari sumber
              daya lain yang disediakan oleh pihak ketiga. Kami tidak bertanggung jawab atas perubahan tautan atau
              kerugian yang dapat timbul apabila Anda menggunakannya. Hal ini dikarenakan kami tidak mengontrol isi dari
              situs tersebut dan berada di luar tanggung jawab kami.</p>
            <p><strong>Perubahan-Perubahan</strong><br /><br />Karena syarat-syarat penggunaan ini mengikat Anda, kami
              harapkan agar Anda sering memeriksa halaman ini karena halaman ini bisa berubah sewaktu-waktu tanpa
              pemberitahuan sebelumnya. Kami memiliki kebijakan untuk merevisi syarat-syarat penggunaan ini pada saat
              kapanpun. Sebagian dari ketentuan yang terdapat dalam syarat-syarat penggunaan ini juga dapat digantikan
              oleh ketentuan-ketentuan atau pemberitahuan yang dipublikasi di bagian lain situs ini.</p>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button> -->
            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Tutup</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <HomeBeta /> -->
    <!-- <HomeBenefit /> -->
    <!-- <HomeClosingStatement /> -->
  </div>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/WgQ3uShk";

export default {
  data() {
    return {
      full_name: "",
      email: "",
    };
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: this.full_name,
          email: this.email,
        }),
      });

      this.$router.push("/thank-you-beta");
    },
  },
};
</script>


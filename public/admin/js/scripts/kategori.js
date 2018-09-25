const  db = firebase.database();

var app = new Vue({
  el: '#app',
  data: {
    modal : {
      id: '',
      nama: '',
      kode: '',
      detail: ''
    }

  },
  firebase: {
    kategori: db.ref('kategori')
  },
  methods: {
    resetModal(){
      this.modal.id='';
      this.modal.nama = '';
      this.modal.kode = '';
      this.modal.detail = '';
    },
    addKategori () {
      this.$firebaseRefs.kategori.push({
        nama_kategori: this.modal.nama,
        kode_kategori: this.modal.kode,
        detail_kategori: this.modal.detail
      });
      this.resetModal();
    },
    loadModal(data){
      this.modal.id = data['.key'];
      this.modal.nama = data.nama_kategori;
      this.modal.kode = data.kode_kategori;
      this.modal.detail = data.detail_kategori;
    },
    deleteKategori (key) {
      this.$firebaseRefs.kategori.child(key).remove();
      this.resetModal();
    },
    updateKategori(key) {
      this.$firebaseRefs.kategori.child(key).set({
        nama_kategori: this.modal.nama,
        kode_kategori: this.modal.kode,
        detail_kategori: this.modal.detail
      });
      this.resetModal();
    }
  }
});

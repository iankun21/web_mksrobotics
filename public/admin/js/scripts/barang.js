const  db = firebase.database();

var app = new Vue({
  el: '#app',
  data: {
    modal : {
      id: '',
      nama: '',
      satuan: '',
      harga_dasar: '',
      harga_jual: '',
      kategori: '',
      detail: '',
      stok: ''
    }

  },
  firebase: {
    kategori: db.ref('kategori'),
    barang: db.ref('barang')
  },
  methods: {
    resetModal(){
      this.modal.id = '';
      this.modal.nama = '';
      this.modal.satuan = '';
      this.modal.harga_dasar = '';
      this.modal.harga_jual = '';
      this.modal.kategori = '';
      this.modal.detail = '';
      this.modal.stok = '';
    },
    addBarang () {
      this.$firebaseRefs.barang.push({
        nama_barang: this.modal.nama,
        satuan: this.modal.satuan,
        harga_dasar: this.modal.harga_dasar,
        harga_jual: this.modal.harga_jual,
        kategori: this.modal.kategori,
        detail_barang: this.modal.detail,
        jumlah_stok: this.modal.stok

      });
      this.resetModal();
    },
    loadModal(data){
      this.modal.id = data['.key'];
      this.modal.nama = data.nama_barang;
      this.modal.satuan = data.satuan;
      this.modal.harga_dasar = data.harga_dasar;
      this.modal.harga_jual = data.harga_jual;
      this.modal.kategori = data.kategori;
      this.modal.detail = data.detail_barang;
      this.modal.stok = data.jumlah_stok;
    },
    deleteBarang (key) {
      this.$firebaseRefs.barang.child(key).remove();
      this.resetModal();
    },
    updateBarang(key) {
      this.$firebaseRefs.barang.child(key).set({
        nama_barang: this.modal.nama,
        satuan: this.modal.satuan,
        harga_dasar: this.modal.harga_dasar,
        harga_jual: this.modal.harga_jual,
        kategori: this.modal.kategori,
        detail_barang: this.modal.detail,
        jumlah_stok: this.modal.stok
      });
      this.resetModal();
    }
  }
});

$('.input-angka').on('keypress', function(e){
  return e.metaKey || // cmd/ctrl
    e.which <= 0 || // arrow keys
    e.which == 8 || // delete key
    /[0-9]/.test(String.fromCharCode(e.which)); // numbers
});

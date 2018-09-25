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
    
    getNamaKategori(key){
      var nama_kategori;

      db.ref("/kategori/"+ key + "/nama_kategori").on("value", function(snapshot) {
          nama_kategori = snapshot.val();
      });
      return nama_kategori;


    },
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


function forceNumeric(){
    var $input = $(this);
    $input.val($input.val().replace(/[^\d]+/g,''));
}
$('body').on('propertychange input', 'input[type="number"]', forceNumeric);

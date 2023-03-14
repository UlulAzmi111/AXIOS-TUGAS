

function getPelanggan() {
    axios({
      method: "get",
      url: "http://localhost/tugas/php/select.php",
    }).then((res) => {
      let no = 1;
  
      console.log(res.data);
  
      let pelanggan = `<h5 class="data">Data Pelanggan :</h5>
                                  <table class='table table-bordered table-success border-light border-2 table-hover'><tr>
                                  <th>ID</th>
                                  <th>Pelanggan</th>
                                  <th>Alamat</th>
                                  <th>Telp</th>
                                  <th>Hapus</th>
                                  <th>Ubah</th>
                                  <th>Cart</th>
                                  </tr>`;
  
      res.data.forEach((val) => {
        pelanggan += `<tr>
                  <td>${no++}</td>
                  <td id="pelanggann">${val.pelanggan}</td>
                  <td id="alamatt">${val.alamat}</td>
                  <td id="telepun">${val.telp}</td>
  
                  <td><button onclick="deletePelanggan(${val.idpelanggan})" id="idpelanggann" type="button" class="btn btn-danger hapus-pel" data-id=${val.idpelanggan}>DEL</button></td>

                  <td><button onclick="selectDataPelanggan(${val.idpelanggan})" type="button" id="btn-ubahh" class="btn btn-warning btn-ubah" data-bs-toggle="modal" data-bs-target="#exampleModal" id="idpelanggann" data-id=${val.idpelanggan}>UBAH</button></td>

                  <td><button id="idpelanggann" onclick="selectPelangganWhere(${val.idpelanggan})" type="button" class="btn btn-success btn-cart" data-id=${val.idpelanggan}>CART</button></td>
                  </tr>`;
      });
  
      pelanggan += "</table>";
  
      document.querySelector("#out").innerHTML = pelanggan;
    });
  }

  document.querySelector("#data").addEventListener('click', getPelanggan);



//------------------------------------------------------------------------------------------------------------------------------



function getBarang() {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
    }).then((res) => {
      console.log(res);
  
      let barang = `<h5 class="data">Data Barang: </h5>
                      <tr>
                      <table class='table table-bordered table-success border-light border-2 table-hover'><tr>
                      <th>Delete</th>
                      <th>Update</th>
                      <th>Tambah</th>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Discount Percentage</th>
                      <th>Rating</th>
                      <th>Stock</th>
                      <th>Brand</th>
                      <th>Categori</th>
                      <th>Thumbnail</th>
                      <th>Images</th>
                      </tr>`;
  
      res.data.products.forEach((val) => {
        barang += `<tr>
                              <td><button onclick="deleteBarang(${val.id})" id="idbarang" type="button" class="btn btn-danger" id="idbarang" data-id=${val.id}>DEL</button></td>

                              <td><button onclick="selectDataBarang(${val.id})" type="button" id="idbarang" class="btn btn-warning btn-ubahbaranggg" data-bs-toggle="modal" data-bs-target="#barangmodal"  data-id=${val.id}>UBAH</button></td>

                              <td><button onclick="selectBarangWhere(${val.id})" type="button" class="btn btn-success btn-tampiltiga" id="idbarang" data-id=${val.id}>Cart</button></td>
  
                              <td id="idbarang">${val.id}</td>
                              <td id="barrang">${val.title}</td>
                              <td>${val.description}</td>
                              <td id="harga">${val.price}</td>
                              <td>${val.discountPercentage}</td>
                              <td>${val.rating}</td>
                              <td id="jumlah">${val.stock}</td>
                              <td>${val.brand}</td>
                              <td>${val.category}</td>
                              <td>${val.thumbnail}</td>
                              <td>${val.images}</td>
                              </tr>`;
      });
  
      barang += "</table>";

      document.querySelector("#output").innerHTML = barang;

    });
  }

  document.querySelector("#data").addEventListener('click', getBarang);


  //------------------------------------------------------------------------------------------------------------------------------



  let idpelanggan = "";
  let pelanggan = "";
  let alamat = "";
  let telp = "";


function insertPelanggan() {
    const datapelanggan = {
        pelanggan : document.getElementById("pelanggan").value,
        alamat : document.getElementById("alamat").value,
        telp : document.getElementById("telp").value,
    }

    axios.post(
        "http://localhost/tugas/php/insert.php",
        JSON.stringify(datapelanggan)
    ).then(res=> {

        console.log(res);
        window.location.reload('http://127.0.0.1:5500/');
        
    })
}


function selectDataPelanggan(id) { 
    let idpelanggan = {
        idpelanggan : id,
    }

    axios.post(
        "http://localhost/tugas/php/selectupdate.php",
        JSON.stringify(idpelanggan)
    ).then(res=> {

        console.log(res);

        document.querySelector("#titel").innerHTML = "<h4>Ubah Pelanggan</h4>";

        document.getElementById("id").value = res.data.idpelanggan;
        document.getElementById("pelanggan").value = res.data.pelanggan;
        document.getElementById("alamat").value = res.data.alamat;
        document.getElementById("telp").value = res.data.telp;
    })

}


function updatePelanggan() { 
    const datapelanggan = {
        idpelanggan : document.getElementById("id").value,
        pelanggan : document.getElementById("pelanggan").value,
        alamat : document.getElementById("alamat").value,
        telp : document.getElementById("telp").value,
    }

    axios.put(
        "http://localhost/tugas/php/update.php",
        JSON.stringify(datapelanggan)
    ).then(res=> {

        let out = `<p>Data pelanggan telah diupdate !!!</p>`;

        document.querySelector("#msg").innerHTML = out;

        window.location.reload('http://127.0.0.1:5500/');
    })

 }


 if (id == "") {
    document.querySelector("#submitpelanggan").addEventListener("click", insertPelanggan);
 } else {
    document.querySelector("#submitpelanggan").addEventListener("click", updatePelanggan);
 }



let idbaranggg = "";
let title = "";
let description = "";
let price = "";
let discountPercentage = "";
let rating = "";
let stock = "";
let brand = "";
let category = "";
let thumbnail = "";


function insertBarang() {
    const dataBarang = {
        title : document.getElementById("title").value,
        description : document.getElementById("description").value,
        price : document.getElementById("price").value,
        discountPercentage : document.getElementById("discountPercentage").value, 
        rating : document.getElementById("rating").value,
        stock : document.getElementById("stock").value,
        brand : document.getElementById("brand").value,
        category : document.getElementById("category").value,
        thumbnail : document.getElementById("thumbnail").value
    }

    axios({
        method: "post",
        url: "https://dummyjson.com/products/add",
        data: JSON.stringify(dataBarang),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    }).then(res=> {

        console.log(dataBarang);
    });

    document.getElementById("id").value = "",
    document.getElementById("title").value = "",
    document.getElementById("description").value = "",
    document.getElementById("price").value = "",
    document.getElementById("discountPercentage").value = "", 
    document.getElementById("rating").value = "",
    document.getElementById("stock").value = "",
    document.getElementById("brand").value = "",
    document.getElementById("category").value = "",
    document.getElementById("thumbnail").value = ""

}


function deletePelanggan(id) { 
    let idpelanggan = {
        idpelanggan : id,
    }

    axios({
        method: "post",
        url: "http://localhost/tugas/php/delete.php",
        data: JSON.stringify(idpelanggan)
    }).then(res => {
        
        let out = `<p>Data Telah Dihapus !!!</p>`;

        document.querySelector("#msg").innerHTML = out;
    
        window.location.reload('http://127.0.0.1:5500/');
    })

    getPelanggan();
}


function deleteBarang(id) {
    axios({
        method : "delete",
        url :`https://dummyjson.com/products/${id}`
    }).then(res => {
        
            console.log(res);
    })

    getBarang();
}


 function selectDataBarang(id) { 
    axios.get(
        `https://dummyjson.com/products/${id}`
    ).then(res => {

        document.querySelector("#judulll").innerHTML = "<h4>Ubah Barang</h4>";

        document.getElementById("id").value = res.data.id,
        document.getElementById("title").value = res.data.title,
        document.getElementById("description").value = res.data.description,
        document.getElementById("price").value = res.data.price,
        document.getElementById("discountPercentage").value = res.data.discountPercentage, 
        document.getElementById("rating").value = res.data.rating,
        document.getElementById("stock").value = res.data.stock,
        document.getElementById("brand").value = res.data.brand,
        document.getElementById("category").value = res.data.category,
        document.getElementById("thumbnail").value = res.data.thumbnail 
  })
 }

function updateBarang() { 
    const dataBarang = {
        idbaranggg : document.getElementById("id").value,
        title : document.getElementById("title").value,
        description : document.getElementById("description").value,
        price : document.getElementById("price").value,
        discountPercentage : document.getElementById("discountPercentage").value, 
        rating : document.getElementById("rating").value,
        stock : document.getElementById("stock").value,
        brand : document.getElementById("brand").value,
        category : document.getElementById("category").value,
        thumbnail : document.getElementById("thumbnail").value
    }

    axios.put(
        "https://dummyjson.com/products/" + id,
        JSON.stringify(dataBarang)
    ).then(res=> {

        console.log(dataBarang);

        let out = `<p>Data barang telah diubah !!!</p>`;

    });

    document.getElementById("id").value = "",
    document.getElementById("title").value = "",
    document.getElementById("description").value = "",
    document.getElementById("price").value = "",
    document.getElementById("discountPercentage").value = "", 
    document.getElementById("rating").value = "",
    document.getElementById("stock").value = "",
    document.getElementById("brand").value = "",
    document.getElementById("category").value = "",
    document.getElementById("thumbnail").value = ""
   }
 

   if (idbaranggg == "") {
        document.querySelector("#submitbarang").addEventListener("click", insertBarang);
   } else {
        document.querySelector("#submitbarang").addEventListener("click", updateBarang);
   }


let idpelanggann = "";
let pelanggann = "";
let alamatt = "";
let telepun = "";
let idbarang = "";
let barrang = "";
let harga = "";
let jumlah = "";


function selectPelangganWhere(id) { 
    axios.get(
        "http://localhost/tugas/php/selectwhere.php?id="+id,
        JSON.stringify(id)
    ).then(res => {
        let output = `  <button type="button" id="btn-toorder" onclick="addToCart()" class="btn btn-primary my-3               vertical-center">Add to Cart</button>

                        <h5 class="data">Data pelanggan yang dipilih :</h5>
                        <table class='table table-bordered table-danger border-light border-2 table-hover'>

                        <tr>
                            <th>Id</th>
                            <th>Pelanggan</th>
                            <th>Alamat</th>
                            <th>Telp</th>
                        </tr>

                        <tr>
                            <td id="idpelanggan">${res.data.idpelanggan}</td>
                            <td id="pelanggan">${res.data.pelanggan}</td>
                            <td id="alamat">${res.data.alamat}</td>
                            <td id="telp">${res.data.telp}</td>
                        </tr>`;

        output += '</table>';

        document.querySelector("#cart1").innerHTML = output;

        idpelanggann = res.data.idpelanggan;
        pelanggann = res.data.pelanggan;
        alamatt = res.data.alamat;
        telepun = res.data.telp;

    })
 }


function selectBarangWhere(id) { 
    axios.get(
        `https://dummyjson.com/products/${id}`,
    ).then(res => {
        let barang = `  <table class='table table-bordered table-danger border-light border-2 table-hover'>

                        <h5 class="data">Data barang yang dipilih :</h5>
                        <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Stock</th>
                        </tr>
                        
                        <tr>
                        <td id="idbarang">${res.data.id}</td>
                        <td id="title">${res.data.title}</td>
                        <td id="price">${res.data.price}</td>
                        <td id="stock">${res.data.stock}</td>
                        </tr>`;

        barang += '</table>';

        idbarang = res.data.id;
        jumlah = res.data.stock;
        harga = res.data.price;
        barrang = res.data.title;

        document.querySelector("#cart2").innerHTML = barang;

    })
 }



function addToCart() { 

  let pelangganbarang = {
    idorder : 2,
    idbarang : idbarang,
    jumlah : jumlah,
    harga : harga,
    barrang : barrang,
    idpelanggann : idpelanggann,
    pelanggann : pelanggann,
    alamatt : alamatt,
    telepun : telepun
}

    axios.post(
        "http://localhost/tugas/php/addtocart.php",
        JSON.stringify(pelangganbarang)
    ).then(res=> {

        console.log(res);
    
        let out = `<p>Data telah dipesan !!!</p>`;

        document.querySelector("#msg").innerHTML = out;

        if (addToCart()) {
            document.getElementById("id").value = "",
            document.getElementById("title").value = ""
        }
    
    });


 }





Imren Grill v.1.0

Imren Grill adalah program aplikasi berbasis web yang digunakan untuk melakukan perhitungan total pembelian dari rumah makan "Imren Grill".
Aplikasi ini memiliki alur kerja seperti berikut;
User akan meng-input nama makanan, harga satuan, dan jumlah makanan yang dipesan.
Setelah itu user akan menekan tombol "Enter" untuk memasukan rincian makanan ke dalam tabel kasir (tabel sebelah kiri). Setiap input akan menambah jumlah total bayar.
Setelah selesai maka user perlu untuk menekan tombol "Checkout" untuk memasukan pesanan tersebut ke dalam tabel pembukuan (tabel di sebelah kanan).
Detail waktu pembukuan setiap menu juga dicatat oleh program. Program ini juga merinci total pemasukan, jumlah uang yang disetorkan ke bank, dan jumlah uang cash yang ada kasir.
Maka dari itu, setelah user menekan tombol "Checkout", total pemasukan dan cash akan ikut terupdate.

Mengenai cara kerja transfer bank akan dijelaskan seperti berikut.

Menurut kesepakatan, jika penerimaan sudah mencapai 1 juta rupiah, maka kasir wajib menyetorkan sebanyak 1 juta rupiah pula.
Karena itu, program akan memunculkan pesan berwarna merah yang berkedip-kedip, diatas tabel pembukuan.
User perlu untuk menekan pesan tersebut untuk mengkonfirmasi/melakukan penyetoran ke bank sebesar 1 juta. S
ebagai contoh, jika penerimaan mencapai 5 juta, maka user harus menyetorkan sebesar 5 juta juga.
User perlu menekan pesan tersebut sebanyak 5x untuk melakukan penyetoran tersebut (1 juta/klik).
Setelah user menekan pesan tersebut, dapat dilihat bahwa cash yang dipegang oleh kasir akan berkurang sebanyak 1 juta per kliknya.
Disaat yang bersamaan, jumlah uang yang ditransfer bank juga akan bertambah sebanyak satu juta per kliknya.

Fitur:
Jika user menekan tombol "Enter" saat terdapat kolom yang masih kosong, maka program akan menampilkan "alert" yang mengatakan "Terdapat input yang kosong."
dan program tidak akan dijalankan karena kesalahan input ini bisa menyebabkan error. Untuk kesalahan input seperti
"Harga Satuan" dan "Jumlah" yang seharusnya angka menjadi abjad. - Kesalahan tersebut tidak mungkin karena kolom input hanya bisa menerima data tipe angka.
Sedangkan kolom nama makanan bisa menerima input angka karena bisa jadi menu yang disajikan memiliki penomoran.

Setiap user menekan tombol "Enter", maka kolom input "Nama makanan", "Harga Satuan", dan "Jumlah" akan menjadi kosong untuk memudahkan user input rincian menu customer selanjutnya.

Setiap user menekan tombol "Checkout", maka tabel kasir akan menjadi kosong seperti semula.
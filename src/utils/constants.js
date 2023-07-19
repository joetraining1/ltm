import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import HighlightAltRoundedIcon from '@mui/icons-material/HighlightAltRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import MoreRoundedIcon from '@mui/icons-material/MoreRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AtmOutlinedIcon from '@mui/icons-material/AtmOutlined';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

import BCA from '../assets/bca.png'
import BNI from '../assets/bni.png'
import CIMB from '../assets/cimb.png'
import BRI from '../assets/bri.png'
import Permata from '../assets/permata2.webp'
import Mandiri from '../assets/mandiri.png'
import Jateng from '../assets/jateng.png'

const colorHex = {
    green: '#00ff00'
}

export const StatusPesanan = [
    {
        id: 1,
        title: 'ON PROSES',
        desc: 'Pesanan telah diproses, pembeli dimohon untuk mengecek berkala status dari pesanan masing-masing.',
        createdAt: '14 Juni 2023'
    },
    {
        id: 2,
        title: 'PENDING',
        desc: 'Pesanan ditunda, pembeli dimohon untuk mengecek berkala status dari pesanan masing-masing.',
        createdAt: '14 Juni 2023'
    },
    {
        id: 3,
        title: 'UNPAID',
        desc: 'Pesanan belum dilunasi. Status ini berlaku bagi metode pembayaran Transfer Bank, pembeli dimohon untuk mengecek berkala status dari pesanan masing-masing.',
        createdAt: '14 Juni 2023'
    },
    {
        id: 4,
        title: 'PAID',
        desc: 'Pesanan telah dilunasi, pembeli dimohon untuk mengecek berkala status dari pesanan masing-masing.',
        createdAt: '14 Juni 2023'
    },
    {
        id: 5,
        title: 'APPROVAL',
        desc: 'Pesanan menunggu konfirmasi dari penjual, pembeli dimohon untuk mengecek berkala status dari pesanan masing-masing.',
        createdAt: '14 Juni 2023'
    },
    {
        id: 6,
        title: 'DELIVERING',
        desc: 'Pesanan dalam pengiriman, pembeli dimohon untuk mengecek berkala status dari pesanan masing-masing.',
        createdAt: '14 Juni 2023'
    },
    {
        id: 7,
        title: 'DONE',
        desc: "Pesanan telah selesai, terima kasih sudah membeli produk Marino's Milk & Yoghurt.",
        createdAt: '14 Juni 2023'
    },
    {
        id: 8,
        title: 'CANCELED',
        desc: "Pesanan telah dibatalkan, pembatalan memiliki alasan tertentu dari penjual maupun pembeli.",
        createdAt: '14 Juni 2023'
    },
]

export const CategoryItem = [
    {
        id: 1,
        title: 'Susu Pasterurisasi',
        desc: "Produk susu pasteurisasi olahan susu sapi perah Marino's Milk & Yoghurt.",
        createdAt: '14 Juni 2023'
    },
    {
        id: 2,
        title: 'Yoghurt',
        desc: "Produk yoghurt olahan susu sapi perah Marino's Milk & Yoghurt.",
        createdAt: '14 Juni 2023',
    },
]

export const TypeItem = [
    {
        id: 1,
        title: 'Superadmin',
        desc: "Akun dengan otoritas ke seluruh aplikasi.",
        createdAt: '14 Juni 2023'
    },
    {
        id: 2,
        title: 'Admin',
        desc: "Akun dengan otoritas untuk mengelola aplikasi kecuali memberikan otoritas superadmin kepada akun lain.",
        createdAt: '14 Juni 2023'
    },
    {
        id: 3,
        title: 'User',
        desc: "Akun user, akun umum pada aplikasi yang dapat digunakan untuk menyimpan informasi transaksi pembeli.",
        createdAt: '14 Juni 2023',
    },
]

export const PaymentItem = [
    {
        id: 1,
        title: 'Transfer Bank',
        desc: "Metode pembayaran dengan menggunakan jasa transfer uang antar bank maupun rekening.",
        createdAt: '14 Juni 2023'
    },
    {
        id: 2,
        title: 'Cash On Delivery',
        desc: "Metode pembayaran dengan membayarkan biaya setelah produk diantarkan.",
        createdAt: '14 Juni 2023',
    },
]

export const AccountItem = [
    {
        id: 1,
        bank: 'BCA',
        norek: '3530696790',
        picurl: BCA,
        user: 'CV. Langgeng Tani Makmur',
        createdAt: '14 Juni 2023'
    },
    {
        id: 2,
        bank: 'BCA',
        picurl: BCA,
        norek: '2124696788',
        user: 'CV. Langgeng Tani Makmur',
        createdAt: '14 Juni 2023'
    }
]

export const LabelStyle2 = {
    color: "#636363",
    fontFamily: 'Signika Negative, sans-serif',
    fontWeight: '600',
}

export const LabelStyle = {
    fontFamily: 'Signika Negative, sans-serif',
    fontWeight: '600',
}
export const SideNoteStyle = {
    fontFamily: 'Signika Negative, sans-serif',
    fontWeight: '400',
    color: 'grey',
    fontStyle: 'italic',
    fontSize: '0.8em'
}

export const H5style = {
    fontFamily: 'Signika Negative, sans-serif',
    fontWeight: '600',
    color: '#262626'
}

export const H4style = {
    fontFamily: 'Signika Negative, sans-serif',
    fontWeight: '600',
    color: '#262626',
    margin: '1vw 0'
}

export const MetaValue = {
    fontFamily: 'Signika Negative, sans-serif',
    fontWeight: '600',
    color: '#262626',
    width: '60%',
    textAlign: 'right'
}
export const MetaValue2 = {
    fontFamily: 'Signika Negative, sans-serif',
    fontWeight: '600',
    color: '#262626',
    width: '100%',
    textAlign: 'left'
}

export const MetaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
}
export const MetaStyle2 = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center',
}

export const MetaStyle3 = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}
export const MetaStyle4 = {
    display: 'flex',
    width: '75%',
    alignItems: 'center',
    gap: '5px'
}
export const MetaStyle5 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
}

export const iconStyle = {
    color: '#008BF8'
}

export const menuItemStyle = {
    fontFamily: 'Signika Negative, sans-serif',
    fontWeight: '700',
    fontSize: '1.2em',
    color: '#262626'
}

export const GuideToOrder = [
    {
        id: 1,
        title: 'Login atau Register',
        description: 'Langkah pertama adalah mendaftarkan diri pada website kami dengan memberikan informasi berkaitan dengan keperluan pemesanan. Data sudah dijamin keamanannya.',
        icon: DriveFileRenameOutlineRoundedIcon
    },
    {
        id: 2,
        title: 'Memilih Produk',
        description: "Marino's Milk & Yoghurt menyediakan beraneka ragam variant rasa pada produk olahan susu pasteurisasi dan yoghurt.",
        icon: HighlightAltRoundedIcon
    },
    {
        id: 3,
        title: 'Memasukkan Produk ke Keranjang',
        description: 'Tekan tombol add to cart pada tiap variant rasa yang kamu pilih supaya dapat terdaftar kedalam keranjang belanjaan anda.',
        icon: AddShoppingCartRoundedIcon
    },
    {
        id: 4,
        title: 'Melakukan Checkout',
        description: "Langkah keempat merupakan pendaftaran produk Marino's Milk & Yoghurt favorit kamu kedalam sistem kami untuk diproses dengan melakukan checkout.",
        icon: ShoppingCartCheckoutRoundedIcon
    },
    {
        id: 5,
        title: 'Menyelesaikan Pesanan',
        description: 'Selanjutnya kamu dapat melengkapi pesananmu dengan menambahkan informasi yang dibutuhkan untuk pembayaran dan penerimaan produk.',
        icon: AddCardRoundedIcon
    },
    {
        id: 6,
        title: 'Menunggu Pengiriman',
        description: 'Langkah terakhir adalah menunggu pesananmu diproses hingga diserahkan ke pihak ekspedisi yang kemudian diantarkan menuju alamat yang telah kamu berikan.',
        icon: LocalShippingRoundedIcon
    },
]

export const PaymentType = [
    {
        id: 1,
        title: 'Bank Transfer',
        value: 'Bank Transfer',
    },
    {
        id: 2,
        title: 'Cash on Delivery',
        value: 'Cash on Delivery',
    },
    {
        id: 3,
        title: 'E-Wallet',
        value: 'E-Wallet',
    },
]

export const NoRek = [
    {
        id: 1,
        value: 'BCA - 3530696790',
    },
    {
        id: 2,
        value: 'BCA - 2124696788',
    },
]

export const FilterProduk = [
    {
        id: 1,
        value: 'Susu Pasteurisasi',
    },
    {
        id: 2,
        value: 'Yoghurt',
    },
]
export const FilterPesanan = [
    {
        id: 1,
        value: 'ON PROSES',
    },
    {
        id: 2,
        value: 'PENDING',
    },
    {
        id: 3,
        value: 'UNPAID',
    },
    {
        id: 4,
        value: 'PAID',
    },
    {
        id: 5,
        value: 'APPROVAL',
    },
    {
        id: 6,
        value: 'DELIVERING',
    },
    {
        id: 7,
        value: 'DONE',
    },
]

export const DashMenu = [
    {
        id: 1,
        title: 'Products',
        to: 'products',
        icon: LocalOfferOutlinedIcon
    },
    {
        id: 2,
        title: 'Orders',
        to: 'orders',
        icon: DvrRoundedIcon
    },
    {
        id: 3,
        title: 'Carts',
        to:'carts',
        icon: ShoppingCartOutlinedIcon
    },
    {
        id: 4,
        title: 'Categories',
        to: 'categories',
        icon: MoreRoundedIcon
    },
    {
        id: 5,
        title: 'Banks',
        to: 'banks',
        icon: AccountBalanceRoundedIcon
    },
    {
        id: 6,
        title: 'Status',
        to: 'status',
        icon: HelpOutlineRoundedIcon
    },
    {
        id: 7,
        title: 'payments',
        to: 'payments',
        icon: AtmOutlinedIcon
    },
    {
        id: 8,
        title: 'Account Type',
        to: 'types',
        icon: ManageAccountsRoundedIcon
    },
    {
        id: 9,
        title: 'Users',
        to: 'users',
        icon: PeopleOutlineRoundedIcon
    },
]

export const Category = [
    {
        id: 1,
        title: 'Susu',
        description: "Produk olahan susu pasteurisasi Marino's Milk & Yoghurt",
    },
    {
        id: 2,
        title: 'Yoghurt',
        description: "Produk olahan yoghurt Marino's Milk & Yoghurt ",
    },
]

export const AvaSize = {
    navPic: 30,
    badge: 36,
    profPic: 48,
    profile2: 84,
    profile: 96
}

export const BankItem = [
    {
        id: 1,
        nama: 'Bank Central Asia',
        acronim: 'BCA',
        fotourl: BCA,
        createdAt: '14 Juni 2023'
    },
    {
        id: 2,
        nama: 'Bank Negara Indonesia',
        acronim: 'BNI',
        fotourl: BNI,
        createdAt: '14 Juni 2023'
    },
    {
        id: 3,
        nama: 'CIMB Niaga',
        acronim: 'CIMB',
        fotourl: CIMB,
        createdAt: '14 Juni 2023'
    },
    {
        id: 4,
        nama: 'Bank Rakyat Indonesia',
        acronim: 'BRI',
        fotourl: BRI,
        createdAt: '14 Juni 2023'
    },
    {
        id: 5,
        nama: 'Bank Mandiri',
        acronim: 'Mandiri',
        fotourl: Mandiri,
        createdAt: '14 Juni 2023'
    },
    {
        id: 6,
        nama: 'Permata Bank',
        acronim: 'Permata',
        fotourl: Permata,
        createdAt: '14 Juni 2023'
    },
    {
        id: 7,
        nama: 'Bank Jateng',
        acronim: 'Jateng',
        fotourl: Jateng,
        createdAt: '14 Juni 2023'
    },
]
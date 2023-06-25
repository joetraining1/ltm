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

const colorHex = {
    green: '#00ff00'
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
        id: 1,
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
        value: 'SHIPPING',
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
        title: 'Users',
        to: 'users',
        icon: PeopleOutlineRoundedIcon
    },
]
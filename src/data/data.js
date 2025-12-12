import { faLock, faHandHoldingHeart, faShield, faClock } from '@fortawesome/free-solid-svg-icons'
import featuredcamera from '../assets/images/featured-camera.jpg'
import featuredlaptop from '../assets/images/featured-laptop.avif'
import { FaCar, FaMobileAlt, FaTools, FaCouch, FaFootballBall, FaHome } from 'react-icons/fa'

export const browseCategories = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    icon: FaMobileAlt,
  },
  {
    id: 2,
    name: 'Tools',
    slug: 'tools',
    icon: FaTools,
  },
  {
    id: 3,
    name: 'Vehicles',
    slug: 'vehicles',
    icon: FaCar,
  },
  {
    id: 4,
    name: 'Furniture',
    slug: 'furniture',
    icon: FaCouch,
  },
  {
    id: 5,
    name: 'Sports',
    slug: 'sports',
    icon: FaFootballBall,
  },
  {
    id: 6,
    name: 'Real Estate',
    slug: 'real-estate',
    icon: FaHome,
  },
]

//browse catogories

export const categories = [
  { id: 1, name: 'Electronics', slug: 'electronics' },
  { id: 2, name: 'Vehicles', slug: 'vehicles' },
  { id: 3, name: 'Furniture', slug: 'furniture' },
  { id: 4, name: 'Home Appliances', slug: 'home-appliances' },
  { id: 5, name: 'Sports', slug: 'sports' },
  { id: 6, name: 'Real Estate', slug: 'real-estate' },
]

export const featuredListings = [
  {
    id: 1,
    title: 'Canon EOS Camera',
    image: featuredcamera,
    priceDay: 1200,
    priceWeek: 7500,
    location: 'Mumbai, Maharashtra',
    owner: 'Priya Sharma',
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Sony Lens Kit',
    image: featuredlaptop,
    priceDay: 900,
    priceWeek: 6000,
    location: 'Delhi, India',
    owner: 'Arjun Mehra',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Nikon Prime Lens',
    image: '/public/images/featured-camera.jpg',
    priceDay: 700,
    priceWeek: 5200,
    location: 'Chandigarh',
    owner: 'Kunal Tiwari',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'GoPro Hero 10',
    image: '/public/images/featured-laptop.avif',
    priceDay: 500,
    priceWeek: 3500,
    location: 'Pune, India',
    owner: 'Riya Kapoor',
    rating: 4.9,
  },
]

export const chooseUsData = [
  {
    icon: faLock,
    title: 'Secure Transactions',
    desc: 'All payments are processed securely with complete buyer protection.',
    iconColor: 'text-yellow-600',
  },
  {
    icon: faHandHoldingHeart,
    title: 'Trusted Community',
    desc: 'Every user is verified for a safer renting experience.',
    iconColor: 'text-pink-600',
  },
  {
    icon: faShield,
    title: 'Protection Guarantee',
    desc: 'We protect both renters and owners with secure policies.',
    iconColor: 'text-blue-600',
  },
  {
    icon: faClock,
    title: 'Fast & Simple',
    desc: 'Rent anything quickly without complicated steps.',
    iconColor: 'text-green-600',
  },
]

export const filtercategories = [
  'All Categories',
  'Electronics',
  'Tools',
  'Cameras',
  'Vehicles',
  'Furniture',
  'Party Items',
]

export const cities = [
  '',
  'Mumbai, Maharashtra',
  'Bangalore, Karnataka',
  'Delhi, NCR',
  'Hyderabad, Telangana',
  'Chennai, Tamil Nadu',
]

export const conditions = ['All', 'New', 'Like New', 'Used', 'Heavily Used']

export const priceRanges = [
  { label: 'Any', min: 0, max: 999999 },
  { label: 'Below 500', min: 0, max: 500 },
  { label: '500 – 2000', min: 500, max: 2000 },
  { label: '2000 – 5000', min: 2000, max: 5000 },
  { label: 'Above 5000', min: 5000, max: 999999 },
]

export const categoriesProducts = [
  {
    id: 1,
    name: 'Canon EOS 1500D DSLR',
    price: 800,
    city: 'Mumbai, Maharashtra',
    rating: 4.7,
    condition: 'Like New',
    image: '/images/canon.jpg', // put images in public/images
  },
  {
    id: 2,
    name: 'Portable Generator 2kW',
    price: 600,
    city: 'Delhi, NCR',
    rating: 4.5,
    condition: 'Used',
    image: '/images/generator.jpg',
  },
  {
    id: 3,
    name: 'Nikon D5600 DSLR',
    price: 950,
    city: 'Bangalore, Karnataka',
    rating: 4.8,
    condition: 'New',
    image: '/images/nikon.jpg',
  },
  {
    id: 4,
    name: 'DJI Mini Drone',
    price: 1200,
    city: 'Hyderabad, Telangana',
    rating: 4.9,
    condition: 'Like New',
    image: '',
  },
  {
    id: 5,
    name: 'Electric Drill Machine',
    price: 350,
    city: 'Chennai, Tamil Nadu',
    rating: 4.3,
    condition: 'Used',
    image: '/images/drill.jpg',
  },
  {
    id: 6,
    name: 'Canon 50mm Lens',
    price: 450,
    city: 'Pune, Maharashtra',
    rating: 4.6,
    condition: 'New',
    image: { featuredcamera },
  },
]

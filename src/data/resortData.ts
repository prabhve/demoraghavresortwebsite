export interface VenueSpace {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  seating: string;
  type: 'Lawn' | 'Banquet' | 'Pool' | 'Rooms';
  description: string;
  highlights: string[];
  dimensions: string;
  idealFor: string[];
  image: string;
  additionalImages: string[];
  startingPrice: string;
}

export interface PackageOffer {
  id: string;
  name: string;
  tag: string;
  description: string;
  popularFor: string;
  features: string[];
  priceEstimate: string;
  badge?: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  source: string;
  event: string;
  comment: string;
}

export interface LocationPlace {
  id: string;
  place: string;
  category: 'Transit' | 'Heritage' | 'Temple' | 'Nature' | 'Shopping';
  subtitle: string;
  distance: string;
  time: string;
  icon: string;
  mapNavUrl: string;
}

export const FALLBACK_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=80',
  lawn: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
  banquet1: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  banquet2: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
  pool: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
  room: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  catering: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
  mandap: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
  hotelBackdrop: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80'
};

export const RESORT_INFO = {
  name: 'Raghav Resort',
  tagline: 'Lawn • Banquet Halls • Swimming Pool • Luxury AC Rooms',
  shortBio: 'Kanpur-Unnao Highway’s Premier Destination for Grand Weddings, Pool Parties, Pre-Wedding Celebrations & Staycations.',
  address: 'State Highway 38 (SH-38), Lalau, Hindu Kheda, Deeh, Unnao, Uttar Pradesh 209801',
  locationBrief: '20 Mins from Unnao Junction • 25 Mins from Kanpur Central • On SH-38 Highway',
  rating: 3.9,
  totalReviews: 790,
  googleMapsUrl: 'https://www.google.com/maps/place/Raghav+Resort/@26.5034284,80.4989996,116m/data=!3m1!1e3!4m10!3m9!1s0x399c14d70cffe171:0x6751f66e1fa88ca7!5m3!1s2026-10-28!4m1!1i2!8m2!3d26.5033977!4d80.4993461!16s%2Fg%2F11c5663jry?entry=ttu',
  coordinates: {
    lat: 26.5033977,
    lng: 80.4993461
  },
  phones: [
    { label: 'Primary Desk', number: '+919724539652', display: '+91 97245 39652' },
    { label: 'Event Bookings', number: '+916387919276', display: '+91 63879 19276' },
    { label: 'Reception & Pool', number: '+917009566588', display: '+91 70095 66588' },
  ],
  whatsappNumber: '919724539652',
  whatsappSecondary: '916387919276',
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  totalRooms: '12+ Air-Conditioned Deluxe & Family Suites',
  parkingCapacity: '100+ Cars & Buses with 24/7 Security',
  powerBackup: '100% Heavy Generator Power Backup (Zero Blackouts)',
};

export const KEY_STATS = [
  { value: '1,000+', label: 'Guest Lawn Capacity', icon: 'Trees' },
  { value: '2', label: 'AC Banquet Halls', icon: 'Building2' },
  { value: 'Pool', label: 'Resort Swimming Pool', icon: 'Waves' },
  { value: '12+', label: 'AC Luxury Rooms', icon: 'BedDouble' },
  { value: '3.9★', label: '790+ Google Reviews', icon: 'Star' },
  { value: '100+', label: 'Vehicle Parking', icon: 'Car' },
];

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: 'grand-lawn',
    name: 'Grand Royal Marriage Lawn',
    subtitle: 'Expansive lush green open-air party ground under the stars',
    capacity: 'Up to 1,000 Floating Guests',
    seating: '650 Seated Guests',
    type: 'Lawn',
    description: 'Our sprawling open-air green wedding lawn is designed for grand Indian weddings, royal receptions, and massive festive gatherings. Features a dedicated grand stage, mandap area, royal entry pathway, and wide buffet layout with customizable lighting trusses.',
    highlights: [
      'Accommodates up to 1,000 guests comfortably',
      'Dedicated Baraat welcoming entrance & carpeted runway',
      'Grand elevated wedding stage & royal Mandap setup',
      'Spacious buffet counters with live food stall sections',
      'Heavy-duty DJ & acoustic sound console space',
      'Illuminated palm trees & warm perimeter spotlights'
    ],
    dimensions: '22,000+ sq. ft. manicured grass lawn',
    idealFor: ['Grand Weddings', 'Baraat & Varmala', 'Mega Receptions', 'Political & Community Galas'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80'
    ],
    startingPrice: 'Enquire for Date Availability'
  },
  {
    id: 'banquet-hall-1',
    name: 'Grand Banquet Hall 1',
    subtitle: 'Fully Air-Conditioned Royal Hall with Crystal Chandeliers',
    capacity: 'Up to 300 Floating Guests',
    seating: '200 Seated Guests',
    type: 'Banquet',
    description: 'An opulent air-conditioned ballroom with high ceilings, sparkling crystal chandeliers, polished flooring, and integrated sound systems. Perfect for indoor wedding rituals, sangeet night dances, engagements, and corporate events regardless of the weather.',
    highlights: [
      'Powerful centralized Air Conditioning for hot summers',
      'Elegant golden chandeliers & false-ceiling ambient LEDs',
      'Raised performance stage for DJ, dance performances & bride/groom seating',
      'Dedicated bride & groom green rooms adjacent to hall',
      'Seamless connectivity to the dining and lawn area',
      'Pristine acoustic sound insulation'
    ],
    dimensions: '4,500+ sq. ft. pillarless indoor hall',
    idealFor: ['Ring Ceremony / Engagement', 'Sangeet & Cocktail Night', 'Indoor Wedding', 'Corporate Conferences'],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
    ],
    startingPrice: 'Customized Package on WhatsApp'
  },
  {
    id: 'banquet-hall-2',
    name: 'Intimate Banquet Hall 2',
    subtitle: 'Chic Air-Conditioned Hall for Mid-Sized Ceremonies',
    capacity: 'Up to 200 Floating Guests',
    seating: '125 Seated Guests',
    type: 'Banquet',
    description: 'Designed for intimate family functions and pre-wedding celebrations. Hall 2 provides a cozy yet premium ambiance with state-of-the-art climate control, flexible seating, and dedicated dining arrangements.',
    highlights: [
      'Full AC climate control with fast cooling',
      'Warm golden interior palette with photo-friendly backdrops',
      'Flexible theater, round table, or cluster seating setups',
      'Private buffet and beverage serving alcove',
      'Affordable hourly or day-rate packages available'
    ],
    dimensions: '2,800+ sq. ft. air-conditioned space',
    idealFor: ['Haldi & Mehendi Ceremonies', 'Birthday Parties & Anniversaries', 'Roka Ceremony', 'Kitty Parties & Seminars'],
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    ],
    startingPrice: 'Special Day Packages on WhatsApp'
  },
  {
    id: 'swimming-pool',
    name: 'Resort Swimming Pool & Sun Deck',
    subtitle: 'Sparkling blue pool with poolside loungers & party lawn',
    capacity: 'Up to 150 Guests Poolside',
    seating: '60+ Loungers & Deck Chairs',
    type: 'Pool',
    description: 'A signature highlight of Raghav Resort. Enjoy refreshing dips, vibrant daytime rain dances, evening poolside cocktail sundowners, and pre-wedding bachelor/bachelorette bashes. Clean, filtered water with regular hygiene maintenance.',
    highlights: [
      'Crystal clean swimming pool with continuous filtration',
      'Wide poolside deck for cocktail tables & mocktail bar',
      'Rain dance and outdoor DJ sound facility available on request',
      'Night-time underwater pool illumination and fairy light perimeter',
      'Private changing rooms, showers & lockers',
      'Popular for youth pool parties, birthday bashes & sundowners'
    ],
    dimensions: 'Semi-Olympic style pool with expansive deck',
    idealFor: ['Pool Parties & Sundowners', 'Haldi Poolside Ceremony', 'Bachelor / Bachelorette Bashes', 'Summer Day Outings'],
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    ],
    startingPrice: 'Hourly & Day Slots via WhatsApp'
  },
  {
    id: 'luxury-rooms',
    name: 'Air-Conditioned Deluxe Rooms & Suites',
    subtitle: '12+ Tastefully Furnished Rooms for Wedding Guests & Staycations',
    capacity: 'Sleeps 2-4 per room • Group Blocks Available',
    seating: 'King / Twin Beds with Seating area',
    type: 'Rooms',
    description: 'Comfortable, well-appointed guest rooms equipped with individual air conditioning, plush bedding, attached private bathrooms with geysers, flat-screen television, and dedicated bridal preparation mirrors.',
    highlights: [
      '12+ AC rooms directly on premises for family and wedding party',
      'Dedicated Bridal Suite with large vanity dressing mirror',
      'Round-the-clock room service and friendly housekeeping',
      'Complimentary Wi-Fi & power backup support',
      'Affordable room rates starting approx ₹1,000+ per night',
      'Safe environment with 24-hour security'
    ],
    dimensions: 'Spacious Deluxe & Executive Room layouts',
    idealFor: ['Baraat Stay & Wedding Guests', 'Bridal Makeup & Changing', 'Highway Travelers on SH-38', 'Family Weekend Stays'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80'
    ],
    startingPrice: 'From approx ₹1,000/night (Inquire on WhatsApp)'
  }
];

export const PACKAGES: PackageOffer[] = [
  {
    id: 'royal-wedding',
    name: 'The Grand Royal Wedding Package',
    tag: 'Most Popular',
    badge: 'Full Venue Access',
    description: 'Complete luxury wedding experience combining the 1,000-guest marriage lawn, Grand Banquet Hall 1, bridal suite, and guest room block.',
    popularFor: 'Weddings & Receptions with 300 to 1,000+ attendees',
    features: [
      'Access to 1,000-Capacity Grand Marriage Lawn',
      'Air-Conditioned Grand Banquet Hall 1 for rituals & sangeet',
      'Dedicated Bridal Dressing Suite + Guest AC Rooms',
      'Stage framing, entry walkway & royal mandap setup',
      '100% heavy generator power backup throughout the night',
      'Dedicated secured parking for 100+ vehicles with guard'
    ],
    priceEstimate: 'Custom Date Quote via WhatsApp',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pre-wedding',
    name: 'Pre-Wedding Festive Extravaganza',
    tag: 'Trending',
    badge: 'Haldi • Mehendi • Sangeet',
    description: 'Vibrant, colorful setup optimized for high-energy Haldi ceremonies, Sangeet night dance battles, and Mehendi functions.',
    popularFor: 'Engagements, Haldi, Sangeet, Mehendi with 100 to 300 guests',
    features: [
      'AC Banquet Hall 2 or Poolside Deck venue option',
      'Vibrant yellow & floral decor setup assistance',
      'DJ Sound console with high bass & party disco lights',
      'Changing rooms & guest hospitality assistance',
      'Chaat and mocktail counter area setup',
      'Flexible morning, evening, or full-day booking slots'
    ],
    priceEstimate: 'Instant WhatsApp Quote',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pool-party',
    name: 'Splash Poolside Party & Sundowner',
    tag: 'Summer Hit',
    badge: 'Pool & Music',
    description: 'Beat the heat with an exclusive swimming pool party booking complete with poolside music, loungers, and snack counters.',
    popularFor: 'Birthdays, Friends Reunions, Bachelor Parties & Day Outings',
    features: [
      'Private access to crystal clean swimming pool',
      'Poolside party sound system & dynamic lighting',
      'Loungers, sunbeds, and changing shower rooms',
      'Option for live BBQ / finger food catering setup',
      'Dedicated lifeguard & hygiene attendant on site',
      'Available for 4-hour, 8-hour, or overnight private slots'
    ],
    priceEstimate: 'Direct Slot Booking on WhatsApp',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'room-staycation',
    name: 'Deluxe AC Rooms & Group Stays',
    tag: 'Comfort & Value',
    badge: '12+ AC Rooms',
    description: 'Affordable, clean, air-conditioned rooms right on SH-38 highway between Kanpur and Unnao for weddings or travelers.',
    popularFor: 'Wedding guest accommodations & highway transit travelers',
    features: [
      'Spacious AC Deluxe rooms with attached clean bathrooms',
      'Comfortable queen & king beds with fresh sanitized linens',
      'Flat screen TV, high speed Wi-Fi & 24hr power backup',
      'In-room dining & hot tea/breakfast service',
      'Secure gated car parking for every resident guest',
      'Special bulk discounts for booking 5+ wedding rooms'
    ],
    priceEstimate: 'Approx ₹1,000 / Night (Chat on WhatsApp)',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Lawn & Wedding',
    title: 'Grand Open-Air Wedding Lawn at Night',
    caption: 'Spectacular 1000-guest capacity lawn with illuminated stage & royal mandap',
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g2',
    category: 'Banquets',
    title: 'Crystal Chandelier Banquet Hall 1',
    caption: 'Central air-conditioned luxury hall for 300 guests with elevated stage',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g3',
    category: 'Poolside',
    title: 'Resort Swimming Pool & Sun Deck',
    caption: 'Sparkling blue waters ideal for pool parties, haldi sundowners, and leisure dips',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g4',
    category: 'Rooms',
    title: 'Executive Air-Conditioned Deluxe Suite',
    caption: 'Plush bedding, modern air conditioning, and bridal dressing vanity',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g5',
    category: 'Lawn & Wedding',
    title: 'Royal Mandap & Floral Decor',
    caption: 'Customizable stage decoration with exotic florals and warm golden lighting',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g6',
    category: 'Banquets',
    title: 'Intimate Banquet Hall 2 for Sangeet & Mehendi',
    caption: 'Festive indoor setup accommodating up to 200 guests comfortably',
    url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g7',
    category: 'Dining & Catering',
    title: 'Multi-Cuisine Royal Buffet & Live Counters',
    caption: 'Delicious vegetarian and non-vegetarian Awadhi, North Indian & Continental delights',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g8',
    category: 'Poolside',
    title: 'Evening Poolside Celebration Ambiance',
    caption: 'Under-water lighting and fairy lights creating magical cocktail night vibes',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g9',
    category: 'Rooms',
    title: 'Family Suite with Modern Bathroom',
    caption: 'Clean, sanitized spaces with instant hot water geysers and fresh amenities',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 't1',
    author: 'Vikas Shukla & Family',
    rating: 5,
    timeAgo: 'Recently',
    source: 'Google Maps Verified Review',
    event: 'Sister’s Grand Wedding (700 Guests)',
    comment: 'We booked Raghav Resort for my sister’s wedding in Unnao. The lawn is humongous! Easily handled our 700+ guests without any crowding. The banquet hall was fully chilled despite the hot weather, and there was plenty of parking space for all the cars coming from Kanpur.'
  },
  {
    id: 't2',
    author: 'Anil Kumar Trivedi',
    rating: 4,
    timeAgo: '2 months ago',
    source: 'Justdial & Google Review',
    event: 'Ring Ceremony & Sangeet',
    comment: 'Great property located directly on the main highway. Hall 1 lighting and chandelier decoration looked royal in photography. The staff managed the generator backup promptly during power cuts. Direct WhatsApp booking made coordination very smooth.'
  },
  {
    id: 't3',
    author: 'Rohit Verma',
    rating: 5,
    timeAgo: '3 months ago',
    source: 'Google Review',
    event: 'Private Pool Party & Birthday Bash',
    comment: 'Booked the swimming pool for a Sunday pool party with friends. Super clean water, good music setup, and poolside snacks were arranged quickly. One of the very few resorts in Unnao-Kanpur highway with such a nice private pool!'
  },
  {
    id: 't4',
    author: 'Pooja & Saurabh Mishra',
    rating: 5,
    timeAgo: '5 months ago',
    source: 'Google Maps Verified Review',
    event: 'Pre-Wedding Haldi & Reception',
    comment: 'Everything went smoothly. The 12+ rooms allowed our outstation relatives to rest before the Baraat arrived. Clean rooms, hygienic pool, and direct owner pricing with zero hidden charges. Highly recommended for Kanpur-Unnao families.'
  }
];

// Transit Hubs & Connectivity Routes from Raghav Resort
export const TRANSIT_PLACES: LocationPlace[] = [
  {
    id: 'tr-1',
    place: 'Unnao Railway Junction',
    category: 'Transit',
    subtitle: 'Major Northern Railway Junction connecting Lucknow, Kanpur & Delhi',
    distance: '12 km',
    time: '18-20 Mins',
    icon: 'Train',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Unnao+Junction+Railway+Station+Unnao'
  },
  {
    id: 'tr-2',
    place: 'Kanpur Central Railway Station & Phool Bagh',
    category: 'Transit',
    subtitle: 'Central hub for guests arriving via Vande Bharat, Rajdhani & Shatabdi',
    distance: '18.5 km',
    time: '25-30 Mins',
    icon: 'Train',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Kanpur+Central+Railway+Station'
  },
  {
    id: 'tr-3',
    place: 'Kanpur Chakeri Airport (KNU)',
    category: 'Transit',
    subtitle: 'Direct commercial domestic flights connecting Mumbai, Delhi & Bengaluru',
    distance: '28.0 km',
    time: '35-40 Mins',
    icon: 'Plane',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Kanpur+Airport+Chakeri'
  },
  {
    id: 'tr-4',
    place: 'Lucknow Chaudhary Charan Singh Airport (LKO, Amausi)',
    category: 'Transit',
    subtitle: 'International & domestic flight terminal with express corridor access',
    distance: '55.0 km',
    time: '50-60 Mins',
    icon: 'PlaneTakeoff',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Chaudhary+Charan+Singh+International+Airport+Lucknow'
  },
  {
    id: 'tr-5',
    place: 'State Highway 38 (SH-38 Corridor)',
    category: 'Transit',
    subtitle: 'Direct wide four-lane highway frontage for easy baraat buses & cars',
    distance: '0.0 km',
    time: 'Direct Frontage',
    icon: 'Navigation',
    mapNavUrl: 'https://www.google.com/maps/search/?api=1&query=26.5033977,80.4993461'
  }
];

// Famous Tourist, Heritage & Spiritual Landmarks around Unnao & Kanpur
export const FAMOUS_NEARBY_PLACES: LocationPlace[] = [
  {
    id: 'lm-1',
    place: 'Bithoor Brahmavart Ghat & Valmiki Ashram',
    category: 'Heritage',
    subtitle: 'Sacred Ganga river ghat, historic Sita Rasoi, and Ramayana heritage',
    distance: '24 km',
    time: '32-35 Mins',
    icon: 'Landmark',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Brahmavart+Ghat+Bithoor+Kanpur'
  },
  {
    id: 'lm-2',
    place: 'JK Temple (Radha Krishna Mandir)',
    category: 'Temple',
    subtitle: 'Magnificent white marble temple with illuminated golden evening aarti',
    distance: '22 km',
    time: '28-32 Mins',
    icon: 'Sparkles',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=JK+Temple+Sarvodaya+Nagar+Kanpur'
  },
  {
    id: 'lm-3',
    place: 'Nawabganj Bird Sanctuary (Shahid Chandra Shekhar Azad)',
    category: 'Nature',
    subtitle: 'Lush green lake sanctuary hosting thousands of migratory Siberian birds',
    distance: '32 km',
    time: '38-42 Mins',
    icon: 'Trees',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Nawabganj+Bird+Sanctuary+Unnao'
  },
  {
    id: 'lm-4',
    place: 'Ganga Barrage & Atal Ghat Promenade',
    category: 'Heritage',
    subtitle: 'Scenic sunset river drive across the Ganges with popular food spots',
    distance: '20 km',
    time: '25-28 Mins',
    icon: 'Waves',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Ganga+Barrage+Kanpur'
  },
  {
    id: 'lm-5',
    place: 'Kalyani Devi Temple, Unnao',
    category: 'Temple',
    subtitle: 'Ancient revered Shakti Peeth temple visited by devotees across UP',
    distance: '9.5 km',
    time: '14-16 Mins',
    icon: 'Sparkles',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Kalyani+Devi+Temple+Unnao'
  },
  {
    id: 'lm-6',
    place: 'Z Square Mall & Mall Road Kanpur',
    category: 'Shopping',
    subtitle: 'North India’s premier luxury retail, food court & cinema entertainment',
    distance: '19 km',
    time: '24-28 Mins',
    icon: 'Building2',
    mapNavUrl: 'https://www.google.com/maps/dir/?api=1&origin=26.5033977,80.4993461&destination=Z+Square+Mall+Kanpur'
  }
];

export const DISTANCES = TRANSIT_PLACES;

export const FAQS = [
  {
    q: 'How do I book or hold a wedding date at Raghav Resort?',
    a: 'You can directly chat with the resort manager on WhatsApp by tapping any "WhatsApp" button on this site. Share your tentative event date, expected guest count, and required spaces (Lawn, Banquets, Pool, Rooms) to receive an instant availability confirmation and official price quote.'
  },
  {
    q: 'What is the maximum guest capacity of Raghav Resort?',
    a: 'Raghav Resort can host up to 1,000+ floating guests on the open marriage lawn. For indoor AC functions, Banquet Hall 1 accommodates 300 guests and Banquet Hall 2 accommodates 200 guests. Combining indoor and outdoor spaces allows large multi-event celebrations.'
  },
  {
    q: 'Is there heavy power backup during electric outages?',
    a: 'Yes, 100%. Raghav Resort operates heavy-duty commercial generators on-site, ensuring zero interruption for stage lighting, sound setups, and centralized air-conditioning throughout your ceremony.'
  },
  {
    q: 'Can we book the swimming pool exclusively for private parties?',
    a: 'Yes! The swimming pool is available for private daytime and evening party slots (birthdays, haldi sundowners, bachelor bashes, family outings). It includes clean changing shower cubicles and optional poolside music setups.'
  },
  {
    q: 'Are AC rooms available for bride, groom, and outstation guests?',
    a: 'Yes, we have 12+ well-furnished AC deluxe rooms directly on property, including a dedicated bridal preparation suite with large mirrors and modern attached bathrooms.'
  },
  {
    q: 'Where is Raghav Resort located and how is the parking?',
    a: 'We are situated directly on State Highway 38 (SH-38) in Hindu Kheda / Lalau near Deeh, Unnao. The highway approach is wide and smooth (no congested village roads), and we provide dedicated secure parking for 100+ vehicles with 24/7 security.'
  }
];

export function buildWhatsAppLink(options: {
  eventType?: string;
  venue?: string;
  date?: string;
  guests?: string;
  name?: string;
  phone?: string;
  note?: string;
  customMessage?: string;
  useSecondary?: boolean;
}): string {
  const number = options.useSecondary ? RESORT_INFO.whatsappSecondary : RESORT_INFO.whatsappNumber;

  if (options.customMessage) {
    return `https://wa.me/${number}?text=${encodeURIComponent(options.customMessage)}`;
  }

  let msg = `*Namaste Raghav Resort!* 🙏\nI would like to inquire about event booking at Raghav Resort (Unnao-Kanpur Highway SH-38).\n\n`;

  if (options.eventType) msg += `📌 *Event Type:* ${options.eventType}\n`;
  if (options.venue) msg += `🏛️ *Preferred Space:* ${options.venue}\n`;
  if (options.date) msg += `📅 *Tentative Date:* ${options.date}\n`;
  if (options.guests) msg += `👥 *Expected Guests:* ${options.guests}\n`;
  if (options.name) msg += `👤 *Name:* ${options.name}\n`;
  if (options.phone) msg += `📞 *Contact:* ${options.phone}\n`;
  if (options.note) msg += `📝 *Notes/Requirements:* ${options.note}\n`;

  msg += `\nPlease share rate quotation and date availability. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

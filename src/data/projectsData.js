export const projectsData = [
  {
    id: 1,
    title: 'Impression — AI-Driven Dating Profile Optimization',
    category: 'software, business',
    description: 'Founder & Lead Developer of an AI-driven platform for optimizing dating profiles using real-time A/B testing and GPT API integration.',
    technologies: ['TypeScript', 'React', 'Firebase', 'GPT API', 'Cloud Functions'],
    image: `${process.env.PUBLIC_URL}/icons/impression.png`,
    github: 'https://github.com/Jaiparmar940/SwipeFix',
    live: 'https://impressiondating.com',
    featured: true,
    hasDetailPage: false
  },
  {
    id: 2,
    title: 'Workly — Mobile Job Matching App',
    category: 'software, business',
    description: 'Full-featured SwiftUI and React Native application with real-time messaging, Firebase integration, and admin pipeline for job posting management.',
    technologies: ['SwiftUI', 'React Native', 'Firebase', 'Python', 'Firestore'],
    image: 'https://picsum.photos/400/250?random=2',
    github: 'https://github.com/Jaiparmar940/workly.git',
    live: null,
    featured: true,
    hasDetailPage: false
  },
  {
    id: 3,
    title: 'Full-Stack Banking Application',
    category: 'software, finance',
    description: 'Secure RESTful banking application with Spring Boot backend, React frontend, and comprehensive transaction management system.',
    technologies: ['Spring Boot', 'React', 'Spring Security', 'JWT', 'REST APIs'],
    image: 'https://picsum.photos/400/250?random=3',
    github: 'https://github.com/Jaiparmar940/banking_application',
    live: null,
    featured: true,
    hasDetailPage: false
  },
  {
    id: 4,
    title: 'ANN Trade Programming',
    category: 'finance, software',
    description: 'Independent research project developing artificial neural networks for U.S. options price prediction using historical and sentiment data.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Sentiment Analysis', 'SARIMA'],
    image: 'https://picsum.photos/400/250?random=4',
    github: 'https://github.com/Jaiparmar940/ann-trading',
    live: null,
    featured: false,
    hasDetailPage: false
  },
  {
    id: 5,
    title: 'JPcommerce — Medical Equipment Resale Business',
    category: 'business, engineering',
    description: 'Self-started business generating $100,000+ revenue through procurement, restoration, and resale of medical equipment with 42% profit margin.',
    technologies: ['Market Analysis', 'Equipment Restoration', 'E-commerce', 'Negotiation', 'Quality Assurance'],
    image: 'https://picsum.photos/400/250?random=5',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'jpcommerce-detail',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image8.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image9.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image10.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image11.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image12.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image13.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image14.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image15.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image16.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image17.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image18.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image19.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image20.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image21.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image22.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image23.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image24.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image25.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image26.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image27.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/jpcommerce/image28.jpeg`
    ]
  },
  {
    id: 6,
    title: 'Structural Design and Analysis of a Pump–Support Platform',
    category: 'engineering',
    description: 'Engineered a height-adjustable platform to support a centrifugal pump via dual angled arms. Performed static equilibrium to determine reaction forces and moments, then carried out comprehensive stress analyses.',
    technologies: ['Static Equilibrium Analysis', 'Stress Analysis', 'Structural Design', 'Mechanical Engineering', 'CAD Modeling'],
    image: 'https://picsum.photos/400/250?random=6',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'pump-support-platform',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/pump-support-platform/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/pump-support-platform/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/pump-support-platform/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/pump-support-platform/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/pump-support-platform/image5.jpeg`
    ]
  },
  {
    id: 7,
    title: 'Autonomous Block-Stacking Robot',
    category: 'engineering, software',
    description: 'Designed and built a robot that autonomously collects and stacks blocks to build towers. The robot was fully modelled in CAD and programmed using Java, OpenCV, TensorFlow, and Vuforia for computer vision and machine learning capabilities.',
    technologies: ['Java', 'OpenCV', 'TensorFlow', 'Vuforia', 'CAD Modeling', 'Robotics', 'Computer Vision', 'Machine Learning', 'Autonomous Systems'],
    image: 'https://picsum.photos/400/250?random=7',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'autonomous-robot',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image8.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image9.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image10.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image11.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image12.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image13.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image14.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image15.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image16.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image18.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image19.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image20.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image21.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image22.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image23.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image24.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image25.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image26.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image27.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image28.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image29.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image30.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image31.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/autonomous-robot/image32.jpeg`
    ]
  },
  {
    id: 8,
    title: 'Design & Testing of a Mousetrap-Powered Sand Vehicle',
    category: 'engineering',
    description: 'Developed and iteratively refined a tricycle-style sand vehicle powered by a single mousetrap. Explored sled vs. wheel drives, gear ratios, and sand-traction issues through hands-on prototyping.',
    technologies: ['Mechanical Design', 'Prototyping', 'Gear Systems', 'Traction Analysis', 'Iterative Design', 'Sand Vehicle Engineering', 'Mousetrap Mechanics'],
    image: 'https://picsum.photos/400/250?random=8',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'mousetrap-vehicle',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/mousetrap-vehicle/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mousetrap-vehicle/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mousetrap-vehicle/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mousetrap-vehicle/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mousetrap-vehicle/image5.jpeg`
    ]
  },
  {
    id: 9,
    title: 'Crypto Mining Server Manufacturing & GPU Optimization',
    category: 'engineering, business',
    description: 'Manufactured custom servers for cryptocurrency mining operations using restored and optimized GPUs. Designed and built mining rigs with enhanced cooling systems and power management for optimal mining performance.',
    technologies: ['Hardware Manufacturing', 'GPU Restoration', 'Mining Optimization', 'Server Design', 'Cooling Systems', 'Power Management', 'Cryptocurrency Mining', 'Hardware Assembly'],
    image: 'https://picsum.photos/400/250?random=9',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'crypto-mining-servers',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image8.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image9.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image10.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image11.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image12.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image13.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image14.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image15.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image16.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image17.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image18.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image19.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/crypto-mining-servers/image20.jpeg`
    ]
  },
  {
    id: 10,
    title: 'C6 Corvette Harmonic Balancer Design & Installation',
    category: 'engineering',
    description: 'Designed and installed a custom harmonic balancer for a C6 Corvette engine. Engineered the balancer to reduce engine vibrations and improve performance through precise balancing and proper installation techniques.',
    technologies: ['Automotive Engineering', 'Harmonic Balancing', 'Engine Design', 'Vibration Analysis', 'Precision Installation', 'Performance Tuning', 'Corvette Modifications', 'Mechanical Assembly'],
    image: 'https://picsum.photos/400/250?random=10',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'corvette-harmonic-balancer',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/corvette-harmonic-balancer/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/corvette-harmonic-balancer/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/corvette-harmonic-balancer/image3.jpeg`
    ]
  },
  {
    id: 11,
    title: 'Piano Lyre System & Hammer Mechanism Repair',
    category: 'engineering',
    description: 'Repaired and restored a piano\'s lyre system and hammer mechanism, addressing mechanical issues and ensuring proper functionality. Performed precision adjustments to restore optimal sound quality and mechanical performance.',
    technologies: ['Piano Mechanics', 'Precision Repair', 'Mechanical Restoration', 'Sound Engineering', 'Fine Motor Skills', 'Instrument Maintenance', 'Mechanical Assembly', 'Quality Control'],
    image: 'https://picsum.photos/400/250?random=11',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'piano-repair',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image8.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/piano-repair/image9.jpeg`
    ]
  },
  {
    id: 12,
    title: 'Complete Boat Restoration & Mechanical Overhaul',
    category: 'engineering',
    description: 'Restored a boat for resale, performing comprehensive repairs including trailer axle restoration, electrical system overhaul, carburetor rebuild, outdrive seal replacement, impeller installation, and U-joint repairs. Successfully restored the vessel to operational condition.',
    technologies: ['Marine Engineering', 'Trailer Mechanics', 'Electrical Systems', 'Carburetor Rebuilding', 'Outdrive Maintenance', 'Impeller Systems', 'U-Joint Repair', 'Marine Restoration', 'Mechanical Overhaul'],
    image: 'https://picsum.photos/400/250?random=12',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'boat-restoration',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image8.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image9.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image10.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image11.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image12.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boat-restoration/image13.jpeg`
    ]
  },
  {
    id: 13,
    title: 'BMW M4 G83 Performance Tuning & Custom Modifications',
    category: 'engineering',
    description: 'Completely tuned and modified a BMW M4 G83, performing all work personally including welded downpipes, high-flow catalytic converters, ethanol sensor installation, piggyback tuner setup, custom air intakes, and custom ECU mapping for optimal performance.',
    technologies: ['Automotive Tuning', 'ECU Mapping', 'Exhaust Systems', 'Catalytic Converters', 'Ethanol Sensors', 'Piggyback Tuners', 'Custom Air Intakes', 'Performance Optimization', 'BMW Modifications', 'Welding'],
    image: 'https://picsum.photos/400/250?random=13',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'bmw-m4-tuning',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/bmw-m4-tuning/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/bmw-m4-tuning/image2.jpeg`
    ]
  },
  {
    id: 14,
    title: 'Comprehensive Vehicle Restoration & Resale Business',
    category: 'business',
    description: 'Established a profitable vehicle restoration business sourcing damaged cars and motorcycles from Facebook Marketplace, performing comprehensive restorations, and reselling for significant profit margins. Successfully restored and sold 25+ vehicles with an average 40% profit margin.',
    longDescription: `This comprehensive vehicle restoration business represents a successful entrepreneurial venture that combined automotive expertise with strategic market analysis and business acumen. The business model focused on identifying undervalued, damaged vehicles on Facebook Marketplace, performing professional-grade restorations, and reselling them at market value for substantial profits.

The sourcing strategy involved daily monitoring of Facebook Marketplace listings to identify vehicles with repairable damage that were significantly undervalued. This included cars and motorcycles with mechanical issues, cosmetic damage, or both. The key was identifying vehicles where the cost of repairs plus the purchase price was significantly below the restored vehicle's market value.

Restoration work encompassed both mechanical and cosmetic repairs. Mechanical restoration included engine rebuilds, transmission repairs, electrical system diagnostics, brake system overhauls, and suspension work. Cosmetic restoration involved body work, paint jobs, interior refurbishment, and detailing. Each vehicle was thoroughly inspected and a detailed restoration plan was developed before purchase.

The business operated with a systematic approach: vehicle acquisition, damage assessment, restoration planning, parts sourcing, mechanical work, cosmetic restoration, quality testing, and final sale. This process was optimized over time to maximize efficiency and profitability while maintaining high quality standards.

Key success factors included developing relationships with reliable parts suppliers, establishing efficient restoration workflows, maintaining strict quality control standards, and building a reputation for quality work. The business successfully restored and sold over 25 vehicles, achieving an average profit margin of 40% and establishing a sustainable revenue stream.`,
    technologies: ['Automotive Restoration', 'Motorcycle Mechanics', 'Engine Rebuilding', 'Business Development', 'Market Analysis', 'Profit Optimization', 'Quality Control', 'Mechanical Engineering', 'Parts Sourcing', 'Entrepreneurship', 'Facebook Marketplace', 'Vehicle Diagnostics', 'Body Work', 'Paint & Finishing', 'Financial Management'],
    image: 'https://picsum.photos/400/250?random=14',
    github: null,
    live: null,
    featured: true,
    hasDetailPage: true,
    detailSlug: 'vehicle-restoration-business',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image8.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image9.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image10.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image11.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image12.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image13.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image14.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image15.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/vehicle-restoration-business/image16.jpeg`
    ]
  },
  {
    id: 15,
    title: 'Custom Fabricated Closet with Engineered Wood',
    category: 'engineering',
    description: 'Designed and constructed a custom fabricated closet system using engineered wood materials. Applied woodworking principles and fabrication techniques to create a functional and aesthetically pleasing storage solution.',
    technologies: ['Woodworking', 'Engineered Wood', 'Custom Fabrication', 'Carpentry', 'Design Engineering', 'Material Selection', 'Precision Cutting', 'Assembly Techniques', 'Interior Design', 'Structural Planning'],
    image: 'https://picsum.photos/400/250?random=15',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'custom-closet',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/custom-closet/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/custom-closet/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/custom-closet/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/custom-closet/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/custom-closet/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/custom-closet/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/custom-closet/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/custom-closet/image8.jpeg`
    ]
  },
  {
    id: 16,
    title: 'Mercedes E300 Rack and Pinion Steering System Replacement',
    category: 'engineering',
    description: 'Replaced the rack and pinion steering system on a Mercedes E300, performing comprehensive diagnostics, removal of the old system, and installation of the new steering components. Ensured proper alignment and functionality.',
    technologies: ['Automotive Engineering', 'Steering Systems', 'Rack and Pinion', 'Mercedes Diagnostics', 'Precision Installation', 'Alignment Procedures', 'Automotive Repair', 'Steering Geometry', 'Quality Control', 'Mechanical Assembly'],
    image: 'https://picsum.photos/400/250?random=16',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'mercedes-steering',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/mercedes-steering/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mercedes-steering/image2.jpeg`
    ]
  },
  {
    id: 17,
    title: 'Luxury Dining Table Design & SolidWorks Modeling',
    category: 'engineering',
    description: 'Designed and modeled a premium dining table inspired by Restoration Hardware aesthetics using SolidWorks CAD software. Applied advanced 3D modeling techniques, material selection analysis, and structural engineering principles to create a sophisticated furniture design.',
    technologies: ['SolidWorks', '3D CAD Modeling', 'Product Design', 'Structural Engineering', 'Material Analysis', 'Furniture Design', 'Design Engineering', '3D Visualization', 'Engineering Documentation', 'Luxury Product Development'],
    image: 'https://picsum.photos/400/250?random=17',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'luxury-dining-table',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/luxury-dining-table/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/luxury-dining-table/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/luxury-dining-table/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/luxury-dining-table/image4.jpeg`
    ]
  },
  {
    id: 18,
    title: 'Heavy-Duty Boulder Transport Device: CAD Design & Prototype Development',
    category: 'engineering',
    description: 'Engineered a mechanical device capable of transporting 500lb boulders across uneven terrain. Utilized SolidWorks for comprehensive CAD design, implemented systematic prototype development (low-medium-high fidelity), and conducted rigorous stress testing to ensure structural integrity and operational reliability.',
    technologies: ['SolidWorks CAD', 'Heavy Equipment Design', 'Prototype Development', 'Stress Analysis', 'Structural Engineering', 'Mechanical Design', 'Load Testing', 'Terrain Adaptation', 'Engineering Validation', 'Product Development Lifecycle'],
    image: 'https://picsum.photos/400/250?random=18',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'boulder-transport-device',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/boulder-transport-device/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boulder-transport-device/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boulder-transport-device/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boulder-transport-device/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boulder-transport-device/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/boulder-transport-device/image6.jpeg`
    ]
  },
  {
    id: 19,
    title: 'McDonald\'s Happy Meal Toy: Injection Moldable Design & Safety Compliance',
    category: 'engineering',
    description: 'Designed and developed an injection moldable toy meeting strict McDonald\'s Happy Meal design limitations and safety standards. Utilized SolidWorks for precise CAD modeling, implemented 3D printing for rapid prototyping, and ensured compliance with child safety regulations and manufacturing requirements.',
    technologies: ['SolidWorks CAD', 'Injection Molding Design', '3D Printing', 'Product Safety Standards', 'Child Safety Compliance', 'Rapid Prototyping', 'Manufacturing Design', 'Regulatory Compliance', 'Toy Design Engineering', 'Quality Assurance'],
    image: 'https://picsum.photos/400/250?random=19',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'mcdonalds-toy',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/mcdonalds-toy/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mcdonalds-toy/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mcdonalds-toy/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mcdonalds-toy/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mcdonalds-toy/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mcdonalds-toy/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mcdonalds-toy/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/mcdonalds-toy/image8.jpeg`
    ]
  },
  {
    id: 20,
    title: 'Metal & Woodworking Workshop Construction',
    category: 'engineering',
    description: 'Designed and constructed a comprehensive metal and woodworking workshop that complies with all building codes and regulations. The project included electrical configuration, lighting design, base construction with proper compaction, and waterproofing systems for a durable and safe working environment.',
    longDescription: `This comprehensive workshop construction project represents a complete engineering solution for creating a professional-grade metal and woodworking facility. The project encompassed every aspect of construction from initial site analysis to final commissioning, ensuring full compliance with all local building codes, electrical codes, and safety regulations.

The foundation work included comprehensive soil analysis and proper compaction techniques to ensure structural integrity. A reinforced concrete slab foundation was designed to handle heavy machinery loads while providing excellent stability. The electrical system was configured with a 200-amp service panel, dedicated circuits for heavy equipment, and comprehensive GFCI protection for safety.

Lighting design focused on both functionality and energy efficiency, incorporating LED high-bay lighting for general illumination and adjustable task lighting for specific work areas. Natural light was maximized through strategic window placement, while emergency lighting systems ensured safety compliance.

Waterproofing and moisture control systems were critical for the workshop's longevity. This included foundation waterproofing membranes, proper drainage systems, vapor barriers, and mechanical ventilation for humidity control. The construction process followed a systematic approach with five distinct phases, each with specific deliverables and quality control measures.

The final result is a 768-square-foot workshop that exceeds building code requirements, provides optimal working conditions, and demonstrates professional construction standards. The facility includes dedicated work zones for both metal and woodworking operations, comprehensive storage solutions, and safety systems that meet or exceed OSHA requirements.`,
    technologies: ['Construction Management', 'Building Codes Compliance', 'Electrical Design', 'Lighting Systems', 'Foundation Engineering', 'Soil Compaction', 'Waterproofing Systems', 'Workshop Design', 'Safety Standards', 'Project Planning', 'Concrete Engineering', 'Drainage Systems', 'Ventilation Design', 'Code Inspection', 'Quality Control'],
    image: 'https://picsum.photos/400/250?random=20',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'workshop-construction',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/workshop-construction/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/workshop-construction/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/workshop-construction/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/workshop-construction/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/workshop-construction/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/workshop-construction/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/workshop-construction/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/workshop-construction/image8.jpeg`
    ]
  },
  {
    id: 21,
    title: 'VisionAssist - AI-Powered Object Recognition for Visually Impaired',
    category: 'software',
    description: 'Developed an Android application using TensorFlow and real-time object recognition to help visually impaired users locate and identify objects in their environment through their phone\'s camera.',
    longDescription: `VisionAssist is a groundbreaking Android application designed to enhance the independence and safety of visually impaired individuals through advanced computer vision technology. The app leverages TensorFlow Lite for real-time object recognition, providing users with immediate audio feedback about objects in their surroundings.

The application uses the device's camera to continuously analyze the visual environment, identifying common objects, people, text, and potential hazards. Through sophisticated machine learning algorithms, the app can recognize hundreds of different object categories with high accuracy, even in varying lighting conditions and angles.

Key features include real-time object detection with minimal latency, audio descriptions of detected objects, distance estimation using camera parameters, and customizable sensitivity settings. The app also incorporates accessibility features such as voice commands, haptic feedback, and integration with screen readers for a fully inclusive user experience.

The technical implementation focuses on optimizing TensorFlow Lite models for mobile devices, ensuring smooth performance while maintaining high recognition accuracy. The app processes camera frames at 30 FPS, providing users with near-instantaneous feedback about their environment. Advanced image preprocessing techniques help maintain recognition quality across different lighting conditions and camera angles.

This project represents a significant step forward in assistive technology, combining cutting-edge AI capabilities with thoughtful user experience design to create a tool that genuinely improves the quality of life for visually impaired individuals. The app demonstrates the potential of mobile AI applications to serve as powerful assistive tools, making technology more accessible and inclusive for all users.`,
    technologies: ['Android Development', 'TensorFlow Lite', 'Computer Vision', 'Machine Learning', 'Real-time Processing', 'Accessibility Design', 'Java/Kotlin', 'OpenCV', 'Audio Processing', 'Camera Integration', 'Mobile AI', 'Object Detection', 'Neural Networks', 'User Experience Design', 'Assistive Technology'],
    image: 'https://picsum.photos/400/250?random=21',
    github: 'https://github.com/Jaiparmar940/VisionAI',
    live: null,
    featured: true,
    hasDetailPage: true,
    detailSlug: 'visionassist-app',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/visionassist-app/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/visionassist-app/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/visionassist-app/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/visionassist-app/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/visionassist-app/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/visionassist-app/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/visionassist-app/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/visionassist-app/image8.jpeg`
    ]
  },
  {
    id: 22,
    title: 'Hackerspace - Public Workshop Construction & Community Fabrication Lab',
    category: 'engineering',
    description: 'Designed and constructed a public workshop facility called "Hackerspace" in collaboration with a local fabrication shop, creating a community resource for makers, engineers, and entrepreneurs to access professional-grade tools and equipment.',
    longDescription: `The Hackerspace project represents a collaborative community development initiative that brought together local engineering talent, fabrication expertise, and community resources to create a public workshop facility. This project involved designing and constructing a comprehensive makerspace that provides access to professional-grade tools and equipment for the local community.

The project began with extensive community outreach and needs assessment, identifying the specific requirements of local makers, engineers, students, and entrepreneurs. Working closely with a local fabrication shop, we leveraged their expertise, equipment, and resources to design a facility that would serve as a hub for innovation and collaboration.

The facility design incorporated multiple specialized work zones including metalworking, woodworking, electronics, 3D printing, and digital fabrication areas. Each zone was equipped with appropriate tools, safety equipment, and ventilation systems. The layout emphasized flexibility and safety, allowing for both individual projects and collaborative workshops.

Key features of the Hackerspace include a comprehensive tool library, safety training programs, project storage solutions, and flexible workspace configurations. The facility also incorporates modern amenities such as high-speed internet, project management software, and digital design workstations for CAD and 3D modeling.

The construction process involved significant collaboration with the local fabrication shop, which provided not only tools and equipment but also technical expertise, safety training, and ongoing support. This partnership model ensured that the facility would be sustainable and well-maintained while providing access to professional-grade resources that individual community members might not otherwise afford.

The project demonstrates the power of community collaboration and resource sharing in creating valuable public infrastructure. By leveraging existing local expertise and resources, we were able to create a facility that serves as both a practical workspace and a community gathering place for knowledge sharing and skill development.

The Hackerspace has become a vital community resource, hosting regular workshops, skill-building sessions, and collaborative projects. It serves as a model for how communities can work together to create shared resources that benefit everyone, particularly in areas where access to professional tools and equipment might otherwise be limited.`,
    technologies: ['Community Development', 'Workshop Design', 'Fabrication Shop Collaboration', 'Safety Systems Design', 'Tool Library Management', 'Community Outreach', 'Project Planning', 'Resource Sharing', 'Workshop Layout', 'Safety Training Programs', 'Digital Fabrication', '3D Printing Integration', 'Electronics Workstations', 'Metalworking Equipment', 'Woodworking Tools'],
    image: 'https://picsum.photos/400/250?random=22',
    github: null,
    live: null,
    featured: false,
    hasDetailPage: true,
    detailSlug: 'hackerspace-workshop',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/hackerspace-workshop/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/hackerspace-workshop/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/hackerspace-workshop/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/hackerspace-workshop/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/hackerspace-workshop/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/hackerspace-workshop/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/hackerspace-workshop/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/hackerspace-workshop/image8.jpeg`
    ]
  },
  {
    id: 23,
    title: 'Project Pure - Clean Water Initiative for Central America',
    category: 'charity',
    description: 'Developed and implemented a comprehensive clean water solution for Central American communities using coagulating agents, chlorine tablets, rainwater collection systems, and well construction to provide sustainable access to safe drinking water.',
    longDescription: `Project Pure represents a humanitarian engineering initiative focused on addressing the critical need for clean, safe drinking water in Central American communities. This comprehensive project combines multiple water purification technologies and collection methods to create sustainable solutions that can be implemented and maintained by local communities.

The project addresses the complex challenges of water scarcity and contamination that affect millions of people in Central America. Many communities rely on contaminated surface water sources, leading to widespread waterborne diseases and health issues. Project Pure was designed to provide multiple water solutions that can be adapted to different local conditions and resource availability.

The technical approach incorporates four main water purification and collection methods:

**Coagulating Agents**: Natural and chemical coagulants are used to remove suspended particles, bacteria, and other contaminants from surface water sources. This process involves adding coagulating agents to turbid water, allowing particles to clump together and settle out, significantly improving water clarity and reducing pathogen levels.

**Chlorine Tablets**: After coagulation and filtration, chlorine tablets provide disinfection to eliminate remaining bacteria, viruses, and protozoa. The tablets are designed for easy use by community members, with clear dosing instructions based on water volume and contamination levels.

**Rainwater Collection Systems**: Comprehensive rainwater harvesting systems capture and store precipitation during the rainy season. These systems include roof collection surfaces, gutters, first-flush diverters to remove initial contaminants, storage tanks with proper sealing, and distribution systems to community access points.

**Well Construction**: Deep well drilling and construction provides access to groundwater sources that are naturally filtered and typically more reliable than surface water. Wells are equipped with hand pumps or solar-powered pumps, depending on local energy availability and community preferences.

The project implementation follows a community-centered approach, involving local residents in the design, construction, and maintenance of water systems. This ensures that solutions are culturally appropriate, sustainable, and can be maintained by the community long after the initial implementation.

Each water system is designed with local conditions in mind, considering factors such as rainfall patterns, soil conditions, local materials availability, and community size. The systems are built using locally available materials where possible, reducing costs and ensuring long-term sustainability.

Training programs are a critical component of Project Pure, teaching community members how to operate and maintain water purification systems, test water quality, and troubleshoot common issues. This knowledge transfer ensures that communities can independently manage their water systems and train future generations.

The project has been implemented in multiple communities across Central America, with each installation customized to local needs and conditions. Success is measured not only by the number of people gaining access to clean water, but also by the long-term sustainability of the systems and the community's ability to maintain and expand water access independently.

Project Pure demonstrates how engineering solutions can be applied to humanitarian challenges, creating lasting positive impact in communities that need it most. The project serves as a model for sustainable development that respects local knowledge and empowers communities to take control of their own water resources.`,
    technologies: ['Water Purification', 'Coagulation Technology', 'Chlorine Disinfection', 'Rainwater Harvesting', 'Well Construction', 'Community Development', 'Sustainable Engineering', 'Water Quality Testing', 'Local Materials', 'Solar Pumping', 'First-Flush Systems', 'Storage Tank Design', 'Distribution Networks', 'Community Training', 'Monitoring Systems'],
    image: 'https://picsum.photos/400/250?random=23',
    github: null,
    live: null,
    featured: true,
    hasDetailPage: true,
    detailSlug: 'project-pure',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image1.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image2.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image3.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image4.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image5.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image6.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image7.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image8.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image9.jpeg`,
      `${process.env.PUBLIC_URL}/static/projects/project-pure/image10.jpeg`
    ]
  },
  {
    id: 24,
    title: 'Custom CPU Architecture - Single-Cycle Processor Design in Logisim',
    category: 'engineering',
    description: 'Designed and implemented a fully functional single-cycle CPU using Logisim, featuring a complete instruction set architecture with ALU operations, memory management, branching logic, and I/O capabilities for keyboard input and teletype output.',
    longDescription: `This project represents the comprehensive design and implementation of a custom Central Processing Unit (CPU) using Logisim, a digital logic simulator. The CPU is a single-cycle processor implementing a MIPS-like instruction set architecture, demonstrating deep understanding of computer architecture principles and digital logic design.

The CPU architecture follows the classic five-stage pipeline model: Instruction Fetch, Instruction Decode, Execute, Memory Access, and Write-Back. Each stage is meticulously designed with proper control signals and data paths to ensure correct instruction execution and data flow throughout the system.

**Core Architecture Components:**

**Program Counter & Instruction Fetch:**
The CPU begins with a Program Counter (PC) implemented as a SingleReg component that holds the current instruction address. The PC increments by 1 (or 4 for byte-addressable memory) using an adder component, feeding into a 64K x 16 ROM that serves as instruction memory. This ROM stores the program instructions and outputs 16-bit instruction words to the instruction decoder.

**Instruction Decode & Control Unit:**
The instructionDecoder component serves as the central control unit, parsing opcodes and generating control signals that orchestrate the entire CPU operation. It outputs multiple control signals including:
- ALU operation codes (oprd)
- Memory control signals (DMwe, Rwd)
- Register file control (Rwe, Rdst)
- Branch and jump logic (Bne, Ble, JP, JR, JAL)
- I/O control (TTY, KB)
- Data path selection (ALUinB, Rwd)

**Register File:**
A comprehensive register file (regFile) provides 16-bit data storage with multiple read and write ports. It supports simultaneous reading of two registers (Rs, Rt) and writing to a destination register (Rd or Rdst). The register file includes clock and reset functionality for proper state management.

**Arithmetic Logic Unit (ALU):**
The ALU component performs all arithmetic and logical operations including addition, subtraction, AND, OR operations, and shift operations. It takes two 16-bit inputs (from registers or immediate values), an operation code, and shift amount, producing results along with status flags (zero, less than zero, overflow).

**Memory System:**
The CPU implements a sophisticated memory hierarchy with a memory_latch component for address and data buffering, connected to a 64K x 16 RAM module. The memory system supports both read and write operations with proper timing control through write enable (WE) and output enable (OE) signals.

**Control Flow & Branching:**
Advanced control flow logic handles conditional branching (Bne, Ble) based on ALU status flags, direct jumps (JP), register-based jumps (JR), and jump-and-link operations (JAL). The PC update logic uses multiplexers to select between sequential execution, branch targets, and jump destinations.

**I/O System:**
The CPU includes integrated input/output capabilities with a keyboard input component (key_out) and teletype output (TTY). The keyboard component provides real-time input processing, while the teletype component enables character output for user interaction and debugging.

**Data Paths & Control Logic:**
Complex data path routing ensures proper data flow between components. Multiplexers controlled by the instruction decoder select appropriate data sources for ALU operations, memory access, and register write-back. Sign extension components convert immediate values and addresses to full 16-bit widths.

**Instruction Set Architecture:**
The CPU supports a comprehensive instruction set including:
- Arithmetic operations (add, subtract, logical operations)
- Data transfer (load/store from memory)
- Control flow (conditional branches, unconditional jumps)
- I/O operations (keyboard input, teletype output)
- Register operations (register-to-register transfers)

**Implementation Details:**
The entire CPU is implemented in Logisim using fundamental digital logic components including registers, multiplexers, adders, memory modules, and control logic gates. The design demonstrates proper timing considerations, reset functionality, and synchronous operation throughout the system.

**Testing & Validation:**
The CPU design includes comprehensive testing capabilities through the integrated I/O system, allowing for real-time program execution and debugging. The teletype output enables monitoring of program execution and results, while keyboard input provides interactive program control.

This project represents a significant achievement in digital logic design and computer architecture, demonstrating the ability to design and implement complex digital systems from first principles. The CPU successfully executes a complete instruction set and provides a foundation for understanding modern processor design principles.`,
    technologies: ['Digital Logic Design', 'Computer Architecture', 'Logisim', 'CPU Design', 'Instruction Set Architecture', 'Digital Circuits', 'Control Logic', 'Memory Systems', 'ALU Design', 'Register Files', 'Branching Logic', 'I/O Systems', 'Digital Electronics', 'Computer Engineering', 'Hardware Design'],
    image: 'https://picsum.photos/400/250?random=24',
    github: null,
    live: null,
    featured: true,
    hasDetailPage: true,
    detailSlug: 'custom-cpu-logisim',
    images: [
      `${process.env.PUBLIC_URL}/static/projects/custom-cpu-logisim/image1.jpeg`
    ]
  }
];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.detailSlug === slug);
}; 
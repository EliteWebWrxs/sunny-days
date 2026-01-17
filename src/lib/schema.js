// Organization Schema
export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'HomeHealthAgency',
	name: 'Sunny Days Companion Services',
	alternateName: 'Sunny Days Care',
	url: 'https://sunnydayscare.com',
	logo: 'https://sunnydayscare.com/images/logo.webp',
	image: 'https://sunnydayscare.com/images/logo.webp',
	description:
		'Professional companion care services designed to enhance quality of life, provide meaningful connections, and support independent living with dignity and joy.',
	telephone: '+1-813-433-0688',
	email: 'inquiry@sunmydayscare.com',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '13194 US Highway 301 South, Suite 170',
		addressLocality: 'Riverview',
		addressRegion: 'FL',
		postalCode: '33578',
		addressCountry: 'US'
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: '27.8661',
		longitude: '-82.3265'
	},
	areaServed: [
		{
			'@type': 'City',
			name: 'Hardee County',
			containedInPlace: {
				'@type': 'State',
				name: 'Florida'
			}
		},
		{
			'@type': 'City',
			name: 'Highlands County',
			containedInPlace: {
				'@type': 'State',
				name: 'Florida'
			}
		},
		{
			'@type': 'City',
			name: 'Hillsborough County',
			containedInPlace: {
				'@type': 'State',
				name: 'Florida'
			}
		},
		{
			'@type': 'City',
			name: 'Manatee County',
			containedInPlace: {
				'@type': 'State',
				name: 'Florida'
			}
		},
		{
			'@type': 'City',
			name: 'Polk County',
			containedInPlace: {
				'@type': 'State',
				name: 'Florida'
			}
		}
	],
	openingHours: 'Mo-Fr 08:00-17:00',
	priceRange: '$$',
	hasCredential: {
		'@type': 'EducationalOccupationalCredential',
		credentialCategory: 'license',
		recognizedBy: {
			'@type': 'Organization',
			name: 'Florida Agency for Health Care Administration'
		},
		identifier: '240843'
	},
	sameAs: [
		'https://sunnydayscare.caresmartz360.com',
		'https://sunnydayscarecp.caresmartz360.com'
	]
};

// Local Business Schema
export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': 'https://sunnydayscare.com/#localbusiness',
	name: 'Sunny Days Companion Services',
	image: 'https://sunnydayscare.com/images/logo.webp',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '13194 US Highway 301 South, Suite 170',
		addressLocality: 'Riverview',
		addressRegion: 'FL',
		postalCode: '33578',
		addressCountry: 'US'
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: '27.8661',
		longitude: '-82.3265'
	},
	url: 'https://sunnydayscare.com',
	telephone: '+1-813-433-0688',
	priceRange: '$$',
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '08:00',
			closes: '17:00'
		}
	]
};

// Service Schema
export const servicesSchema = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			item: {
				'@type': 'Service',
				name: 'Companionship & Conversation',
				description:
					'Friendly conversation, active listening, and genuine engagement to combat loneliness and isolation.',
				provider: {
					'@type': 'Organization',
					name: 'Sunny Days Companion Services'
				}
			}
		},
		{
			'@type': 'ListItem',
			position: 2,
			item: {
				'@type': 'Service',
				name: 'Meal Preparation',
				description:
					'Planning, preparing, and serving nutritious meals according to dietary preferences and requirements.',
				provider: {
					'@type': 'Organization',
					name: 'Sunny Days Companion Services'
				}
			}
		},
		{
			'@type': 'ListItem',
			position: 3,
			item: {
				'@type': 'Service',
				name: 'Light Housekeeping',
				description:
					'Assistance with light housekeeping tasks to maintain a pleasant living environment.',
				provider: {
					'@type': 'Organization',
					name: 'Sunny Days Companion Services'
				}
			}
		},
		{
			'@type': 'ListItem',
			position: 4,
			item: {
				'@type': 'Service',
				name: 'Transportation & Errands',
				description:
					'Safe, reliable transportation and assistance with errands to help maintain an active, engaged lifestyle.',
				provider: {
					'@type': 'Organization',
					name: 'Sunny Days Companion Services'
				}
			}
		},
		{
			'@type': 'ListItem',
			position: 5,
			item: {
				'@type': 'Service',
				name: 'Medication Reminders',
				description: 'Friendly reminders to help ensure medications are taken on schedule.',
				provider: {
					'@type': 'Organization',
					name: 'Sunny Days Companion Services'
				}
			}
		},
		{
			'@type': 'ListItem',
			position: 6,
			item: {
				'@type': 'Service',
				name: 'Travel Companions',
				description:
					'Travel assistance services designed to ensure safety, dignity, and peace of mind throughout your journey.',
				provider: {
					'@type': 'Organization',
					name: 'Sunny Days Companion Services'
				}
			}
		}
	]
};

// Contact Page Schema
export const contactPageSchema = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	url: 'https://sunnydayscare.com/connect',
	name: 'Connect With Us - Sunny Days Companion Services',
	description:
		"Get in touch with Sunny Days Companion Services. We're here to answer your questions and discuss how we can support you or your loved ones.",
	mainEntity: {
		'@type': 'HomeHealthAgency',
		name: 'Sunny Days Companion Services',
		telephone: '+1-813-433-0688',
		email: 'inquiry@sunmydayscare.com',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '13194 US Highway 301 South, Suite 170',
			addressLocality: 'Riverview',
			addressRegion: 'FL',
			postalCode: '33578',
			addressCountry: 'US'
		}
	}
};

// Breadcrumb Schema Generator
export function getBreadcrumbSchema(items) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}

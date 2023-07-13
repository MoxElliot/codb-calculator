import ClientManagement from '../components/IconComponents/CostCategoryIcons/ClientManagement.vue'
import CoursesEducation from '../components/IconComponents/CostCategoryIcons/CoursesEducation.vue'
import EditingDesignSoftware from '../components/IconComponents/CostCategoryIcons/EditingDesignSoftware.vue'
import Email from '../components/IconComponents/CostCategoryIcons/Email.vue'
import GalleryImageDelivery from '../components/IconComponents/CostCategoryIcons/GalleryImageDelivery.vue'
import Insurance from '../components/IconComponents/CostCategoryIcons/Insurance.vue'
import Other from '../components/IconComponents/CostCategoryIcons/Other.vue'
import StudioRent from '../components/IconComponents/CostCategoryIcons/StudioRent.vue'
import WebsiteHosting from '../components/IconComponents/CostCategoryIcons/WebsiteHosting.vue'

const costCategoryOptions: {
  category: string
  icon: any
}[] = [
  {
    category: 'Gallery/Image Delivery',
    icon: GalleryImageDelivery
  },
  {
    category: 'Website/Hosting',
    icon: WebsiteHosting
  },
  { category: 'Insurance', 
    icon: Insurance
  },
  {
    category: 'Email Service',
    icon: Email
  },
  {
    category: 'Client Management',
    icon: ClientManagement
  },
  { category: 'Studio Rent', 
    icon: StudioRent
  },
  {
    category: 'Courses/Educaiton',
    icon: CoursesEducation
  },
  {
    category: 'Editing/Design Software',
    icon: EditingDesignSoftware
  },
  { category: 'Other', 
    icon: Other
  }
]

export default costCategoryOptions

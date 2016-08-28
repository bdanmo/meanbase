/**
 * Site Wide Router Configuration
 */
import { provideRouter } from '@angular/router'

import app from '../components/app/app.js'

// inject views
// end inject views

export default provideRouter([
  { path: '**', component: app}
])

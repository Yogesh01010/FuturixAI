
import './App.css'
import CompanyInfo from './components/pages/CompanyInfo'
import CorporateActions from './components/pages/CorporateActions'
import CiplaFAQs from './components/pages/Footer'
import Financials from './components/pages/ForeCast'
import ForecastDashboard from './components/pages/ForecastBoard'
import MainScreen from './components/pages/MainScreen'
import NewsGrid from './components/pages/NewsGrid'
import PeersComparison from './components/pages/Peer'
import ShareholdingDashboard from './components/pages/ShareHolder'
import TechnicalAnalysis from './components/pages/TechnicalAnalysis'
import VolumeTrends from './components/pages/VolumeTrends'
import VolumeTrendsChart from './components/pages/VolumeTrendsgrapg'

function App() {

  return (
    <>
    <div>
      <MainScreen/>
      <NewsGrid/>
      <Financials/>
      <ForecastDashboard/>
      <VolumeTrendsChart/>
      <ShareholdingDashboard/>
      <CorporateActions/>
      <CompanyInfo/>
      <PeersComparison/>
      {/* <TechnicalAnalysis/> */}
      <VolumeTrends/>
      <CiplaFAQs/>
    </div>
    </>
  )
}

export default App

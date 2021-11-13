import SelectBox from "../Components/selectBox"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const RenderData = () => {

    return (
        <> 
            <Header 
                src="/images/localData.png"
                title="Local data daily"
                subtitle="The latest data from your neighbourhood"
            />
            <SelectBox />
            <Footer />
        </>
    )
}

export default RenderData;
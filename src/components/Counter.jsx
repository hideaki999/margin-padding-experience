import React, {useState} from 'react'

const Counter = () => {

    const [marginCount,marginSetCount] = useState(0)
    const [paddingCount,paddingSetCount] = useState(0)

    const marginUp = () => {
     marginSetCount(prevState => prevState + 1)
    }

    const paddingUp = () =>{
     paddingSetCount(prevState => prevState + 1)
    }

    return(
        <>
        <h2 className="title">margin paddingを体験してみよう</h2>
        <p className="text">「<span className="text_blue">青いボタン</span>」と「<span className="text_orange">オレンジのボタン</span>」をクリック！<br/>リセットはページをリロード</p>
        <div className="count">
            <button style={{marginRight: marginCount}} className="marginCount" onClick={marginUp}>margin {marginCount}px</button>
            <button style={{padding: paddingCount}} className="paddingCount" onClick={paddingUp}>padding {paddingCount}px</button>
        </div>
        </>
    );
};

export default Counter;
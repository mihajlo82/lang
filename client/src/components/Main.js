import mainStyle from './main.module.css';
import Header from './header/Header';
import Counters from './counters/Counters';
import BoxMaster from './masterBox/BoxMaster';
import useActive from './customs/useActive';
import { MAIN_DEFAULT_TYPE } from '../types/default_types';

const Main = ({ itemData, setOnSuccess, totalQuestions, counterSuccess }) => {
    const { inputRef, setText, showCounters, setShowCounter, isMobile } = useActive({ itemData, setOnSuccess })

    return (
        <section className={mainStyle.mainWrapp}>
            <Header mainStyle={mainStyle} />


            <article className={mainStyle.masterBoxWrapp}>

                <div className={mainStyle.masterBox}>

                    <div className={mainStyle.counterMobile}>
                        {showCounters && isMobile &&
                            <Counters
                                mainStyle={mainStyle}
                                counterSuccess={counterSuccess}
                                totalQuestions={totalQuestions}
                            />
                        }
                    </div>

                    <BoxMaster
                        mainStyle={mainStyle}
                        itemData={itemData}
                        setText={setText}
                        setShowCounter={setShowCounter}
                        inputRef={inputRef}
                    />

                    {showCounters && !isMobile &&
                        <Counters
                            mainStyle={mainStyle}
                            counterSuccess={counterSuccess}
                            totalQuestions={totalQuestions}
                        />
                    }
                </div>
            </article>
        </section>
    )
}

export default Main;

Main.defaultProps = MAIN_DEFAULT_TYPE;
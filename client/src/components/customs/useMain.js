import { useEffect, useState } from 'react'
import { getWords } from '../../services/words_service';

const useMain = () => {
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState({});
  const [onSucces, setOnSuccess] = useState(false);
  const [counterSuccess, setCounterSucces] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const resetApp = () => {
    window.alert("Finished! Start Again?")
    window.location.reload();
  }

  const handleLoadedData = data => {
    let shuffledNumbers = data.sort(() => Math.random() - 0.5);
    setData(shuffledNumbers)
    setItemData(data[0]);
    setTotalQuestions(data.length);
  }

  const onSuccesAnswer = () => {
    const filteredData = data.filter(x => x.id !== itemData.id);
    if (filteredData.length === 0 && counterSuccess !== 0) resetApp();

    setData(filteredData);
    setItemData(filteredData[0]);

    if (data.length !== filteredData.length) setCounterSucces(prev => prev + 1);
  }

  useEffect(() => {
    getWords()
      .then(res => handleLoadedData(res.data))
      .catch(err => window.alert(err))
  }, [])

  useEffect(() => onSuccesAnswer(), [onSucces])

  return { itemData, setOnSuccess, totalQuestions, counterSuccess }
}

export default useMain
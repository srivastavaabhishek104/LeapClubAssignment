//import liraries
import React, { useState,useRef,useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, Button } from 'react-native';

import styles from './styles';

import CardImage from '../../components/CardImage/CardImage';

import CardData from '../../data/CardData';

function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
}

const GameScreen = () => {

    const [cardData,setCardData] = useState(() => shuffleCards(CardData.concat(CardData)))
    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [noOfAttempt,setNoOfAttempt] = useState(0);
    
    const timeout = useRef(null);

    useEffect(()=>{
        setNoOfAttempt(noOfAttempt+1);
    },[]);

    useEffect(() => {
        if (openCards.length === 2) {
          setTimeout(evaluate, 500);
        }
    }, [openCards]);
    
    useEffect(() => {
        checkCompletion();
    }, [clearedCards]);

    const checkCompletion = () => {
        if (clearedCards.length === CardData.length) {
            Alert.alert(
                "Game Complete",
                `You completed the game in ${moves} moves. Your best score is ${moves}`,
                [
                    { text: "Restart", onPress: handleRestart }
                ]
            )
        }
    }

    const handleRestart = () => {
        setNoOfAttempt(noOfAttempt+1)
        setClearedCards([]);
        setOpenCards([]);
        setMoves(0);
        setCardData(shuffleCards(CardData.concat(CardData)));
    };

    // Check if both the cards have same text. If they do, mark them inactive
    const evaluate = () => {
        const [first, second] = openCards;
        if (cardData[first].text === cardData[second].text) {
            if(clearedCards.length) {
                setClearedCards((prev) => [...prev, cardData[first].id]);
            } else {
                setClearedCards([cardData[first].id]);
            }
            setOpenCards([]);
            return;
        }
        // Flip cards after a 500ms duration
        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, 500);
    };

    const handleCardClick = (index) => {
        if (openCards.length === 1) {
            if(index !== openCards[0]) {
                setOpenCards((prev) => [...prev, index]);
                // increase the moves once we opened a pair
                setMoves((moves) => moves + 1);
            }
          } else {
            // If two cards are already open, we cancel timeout set for flipping cards back
            clearTimeout(timeout.current);
            setOpenCards([index]);
          }
    }

    const checkIsFlipped = (index) => {
        return openCards.includes(index);
    };

    const checkIsInactive = (card) => {
        return clearedCards.includes(card.id);
    };

    return (
        <View style={styles.container}>
             <View>
                <Text style={styles.headingText}>Play the Flip card game</Text>
                <Text style={styles.subHeadingText}> Select two cards with same content consequtively to make them vanish </Text>
            </View>
            <View style={styles.cardContainer}>
                {
                    cardData.map((element,index) => {
                        const {text} = element;
                        return (
                            <TouchableOpacity disabled={checkIsInactive(element)} key={index} activeOpacity={1} onPress={()=>handleCardClick(index)}>
                                <CardImage 
                                    text={text} 
                                    isFlipped={checkIsFlipped(index)}
                                    isInActive={checkIsInactive(element)}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.movesContainer}>
                <Text style={styles.moveTextStyle}>MOVES: <Text style={styles.moveValueStyle}>{moves}</Text></Text>
                <Text style={styles.moveTextStyle}>No. of Attempt: <Text style={styles.moveValueStyle}>{noOfAttempt}</Text></Text>
                <View style={styles.buttonConatiner}>
                    <Button
                        onPress={handleRestart}
                        title="Restart"
                        accessibilityLabel="click here to restart the button"
                    />
                </View>
            </View>
        </View>
    );
};

//make this component available to the app
export default GameScreen;

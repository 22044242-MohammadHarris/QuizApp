import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";

const Question = ({ options, image,resetObj, answerObj, mainAnswer, 
    questionSequence
 }) => {
  const { answer, setAnswer } = answerObj;
  const {isReset, setIsReset} = resetObj
  const [selected, setSelected] = useState("");

  // set Updated answer based on selection
  const handleAnswer = (optionSelected) => {
    setSelected(optionSelected)
    if (optionSelected == mainAnswer) {
    //   console.log("correct");
      
      if (!answer.includes(mainAnswer+questionSequence)) {
        setAnswer((prev) => [...prev, optionSelected+questionSequence]);
      }

    } else {
      setAnswer((prev) => prev.filter((ans) => ans !== mainAnswer+questionSequence));
      
    //   console.log(answer);
    //   console.log("wrong");
    }
  };

  useEffect(()=>{
    if(isReset==true){
        setSelected("")
        setAnswer([])
        setIsReset(false)
    }
  },[isReset])


  return (
    <View style={{ marginVertical: 10, borderBottomWidth:1, padding:2, borderColor:'light-gray', }}>
      <View>
        <Text style={{ color: "gray", }}>What animal is this?</Text>

        {/* Select options */}

        <RNPickerSelect
          onValueChange={(option) => {
            handleAnswer(option);
          }}
          value={selected}
          items={options}
        />

        {/* image */}
        <Image source={image} style={{ width: "100%", height: 400, marginBottom:20 }} />
      </View>

     
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({

});

import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Question from './components/Question';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
export default function App() {

  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [isReset, setIsReset] = useState(false);


  const options = [
    {
      label: "cat",
      value: "cat",
      image: require('./img/cat.jpg')
    },
    {
      label: "deer",
      value: "deer",
      image: require('./img/deer.jpg')
    },
    {
      label: "fox",
      value: "fox",
      image: require('./img/fox.jpg')
    },
    {
      label: "giraffe",
      value: "giraffe",
      image: require('./img/giraffe.jpg')
    },
    {
      label: "panda",
      value: "panda",
      image: require('./img/panda.jpg')
    },
    {
      label: "penguin",
      value: "penguin",
      image: require('./img/penguin.jpg')
    },
    {
      label: "rabbit",
      value: "rabbit",
      image: require('./img/rabbit.jpg')
    },
    {
      label: "snake",
      value: "snake",
      image: require('./img/snake.jpg')
    },
    {
      label: "tiger",
      value: "tiger",
      image: require('./img/tiger.jpg')
    }
  ];


  const handleScore = () => {
    setScore(answer?.length)
    const medianScore = options.length/2;

    if(score < medianScore){
      Alert.alert("Your score is below average, try again!!", `Score: ${answer?.length} / ${options.length}`)
    }
    if(score > medianScore){
      Alert.alert("Your score is above average, well done!!",`Score: ${answer?.length} / ${options.length}`)
    }
    if(score == medianScore){
      Alert.alert("Your score is average, good job!!",`Score: ${answer?.length} / ${options.length}`)
    }
  }


  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center',marginVertical:5,}}>
        {/* <FontAwesome5 name="cat" size={24} color="black" /> */}
        <MaterialIcons name="quiz" size={24} color="black" />
        <Text style={{marginLeft:10, fontWeight:'bold'}}>Animals Quiz App</Text>
      </View>

      <ScrollView>

      {options?.map((option, index)=>(
        <Question key={index} resetObj={{isReset,setIsReset}} answerObj={{answer,setAnswer}} options={options} mainAnswer={option.label} image={option.image} questionSequence={index++}/>
      ))}

      <Button title='SUBMIT ANSWERS' onPress={handleScore}/>
      <View style={{marginVertical:7}}/>

      <Button onPress={()=>{
        setIsReset(true)
      }} title='reset'/>

      {/* <Text>{JSON.stringify(answer)}</Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop:60,
    margin:10,
    backgroundColor:'whitesmoke',
    padding:2
  },
});

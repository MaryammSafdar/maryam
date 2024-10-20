import { StyleSheet, View, Text } from 'react-native';
import iconSet from '@expo/vector-icons/build/Fontisto';
import Searchbar from './Components/ Searchbar ';
import Doctor from './components/Doctor';

export default function App() {

  return (
    <View style={styles.div}>
      <Textfield></Textfield>
      <Text style={styles.content} >Let's find your doctor</Text>

      <View style={styles.2box}>
        <Doctorbox name="Dr. John Smith" rk="Dermatologist" number="4.9" />
        <Doctorbox name="Dr. Anna Dinn" rk="Phsychologist" number="4.9" />
      </View>

      <View style={styles.next2}>
        <Doctorbox name="Dr. Angela Rayez" rk="Therapist" number="4.8" />
        <Doctorbox name="Dr. Chris Bronte" rk="Dentist" number="5.0" />

      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: "lavender",

  },

  content: {
    fontSize: 17,
    color: "black",
    marginLeft: 13,
    marginTop: 26,
    marginBottom: 15,

  },
  2box: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 22,
  },
  Next2: {
    display: "flex",
    flexDirection: "row",
  },
});
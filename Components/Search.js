import React from "react";
import Navbar from "../Shared/Navbar";
import { View } from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Input,
  Text,
} from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: Date.now(), mode: "datetime", selectedLanguage: " " };
  }
  setSelectedLanguage(itemValue) {}

  render() {
    return (
      <View>
        <Navbar />
        <Card style={{ flex: 1, marginBottom:25 }}>
          <Card.Title>
            <Text h1>Formulaire</Text>
          </Card.Title>
          <View>
            <Card.Divider style={{ flex: 1 }} />
            <View style={styles.date}>
              <Text h3>Date</Text>
              <DateTimePicker
                style={{width:200}}
                testID="dateTimePicker"
                is24Hour={true}
                display="compact"
                value={this.state.date}
                mode={this.state.mode}
                themeVariant="dark"
              />
            </View>
            <Card.Divider style={{ flex: 1 }} />
            <Picker
              selectedValue={this.state.selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Html" value="js" />
              <Picker.Item label="CSS" value="js" />
              <Picker.Item label="TypeScript" value="js" />
              <Picker.Item label="C#" value="js" />
            </Picker>
            <Card.Divider style={{ flex: 1 }} />
            <Input style={{ flex: 1 }} placeholder="FOURNISSEUR" />
            <Card.Divider style={{ flex: 1 }} />
            <Input
              style={{ flex: 1 }}
              placeholder="DESCRIPTION"
              multiline={true}
              numberOfLines={2}
            />
             <Card.Divider style={{ flex: 1 }} />
             <Input style={{ flex: 1 }} placeholder="TOTAL HT 20%" />
             <Card.Divider style={{ flex: 1 }} />
             <Input style={{ flex: 1 }} placeholder="TOTAL HT 5.5%" />
            <Button title="Validation" />
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderColor: "black",
    marginTop: 25,
    backgroundColor: "blue",
  },
  date: {
    display : 'flex',
    flexDirection :'row',
    justifyContent :"space-between",
    marginBottom:20,

  },
});

export default Search;

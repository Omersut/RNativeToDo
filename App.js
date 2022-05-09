import { StyleSheet, Text, View, KeyboardAvoidingView,TextInput,TouchableOpacity } from 'react-native';
import { Platform } from 'react-native-web';
import Task from './components/Task';
import {useState} from 'react';
import {VscSymbolArray} from 'react-icons/vsc';

export default function App() {
  const [task,setTask] = useState('');
  const [tasks,setTasks] = useState([]);

  const handleTask = () => {
    
    setTasks([...tasks,task]);
    setTask('');
  };
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
      <Text style={styles.secondTitle}>Today's tasks</Text>
      <View style={styles.items}>
      {tasks.map((a,i)=>  <TouchableOpacity onPress={() => completeTask(i)} key={i}><Task   item={a} /></TouchableOpacity>)}
      {tasks.length === 0 && <Text style={styles.noTasks}> <VscSymbolArray/> No tasks</Text>}
      </View>
    

      </View>

      <KeyboardAvoidingView behavior={Platform.OS=== "ios" ? "padding": "height"} style={styles.writeTaskWrapper}>
        <TextInput value={task} onChangeText={e => setTask(e)} style={styles.input} placeholder={"Write a task"} />

        <TouchableOpacity onPress={handleTask}>
          <View style={styles.addWrapper}>
            <Text onC style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
 
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  secondTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,

  },
  writeTaskWrapper: {
    position: "absolute",
bottom: 60,
width: "100%",
flexDirection: "row",
justifyContent: "space-around",
alignItems: "center",
  },
  input: {
paddingVertical: 15,
paddingHorizontal: 15,
backgroundColor: "#FFF",
borderRadius: 60,
borderColor: "#c0c0c0",
borderWidth: 1,
width: 250,
  },
  addWrapper: {
width: 60,
height: 60,
backgroundColor: "#fff",
borderRadius: 60,
justifyContent:"center",
alignItems: "center",
borderColor: "#c0c0c0",
borderWidth: 1,
  },
  addText: { fontSize: 20, fontWeight: "bold" },


  noTasks: { fontSize: 24, fontWeight: 'bold', textAlign: "center", marginTop: 50 },
});

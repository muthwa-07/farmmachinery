import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const pairs = [
  { pattern: /hi|hello|hey/i, responses: ["Hello, How can I assist you today?"] },
  { pattern: /how are you\?/i, responses: ["I'm doing great, thanks for asking!", "I'm good, how about you?"] },
  { pattern: /who/i, responses: ["I was developed by Telvin Muthwa"] },
  { pattern: /am good/i, responses: ["Nice to hear that.", "Me too, what's on your mind?", "That's good to hear", "Me too, what's up with you?"] },
  { pattern: /question/i, responses: ["Go on", "I'm ready for the question", "Ask your question", "Shoot"] },
  { pattern: /yes/i, responses: ["Go on then I am here to help."] },
  { pattern: /really/i, responses: ["Yes I am not choosy but if you wish to know more I may help."] },
  { pattern: /purpose/i, responses: ["I was mainly developed to help you in equipping you on better farming knowledge and skills. Got anything else to ask?"] },
  { pattern: /machines|machine/i, responses: ["There are different types of machines. Do specify.", "Which machines do you have in mind?"] },
  { pattern: /tractors|tractor/i, responses: [
      "A tractor is a powerful motor vehicle designed primarily for pulling or pushing agricultural implements such as plows, harrows, trailers, etc. Tractors are also used for transporting materials and tilling the land.Wish to know more?",
      "Tractors are multipurpose farming vehicles used to perform agricultural tasks. They come in various sizes and types depending on the workload and terrain.Wish to know more?"
    ] },
  { pattern: /key features of tractors|key features when buying a tractor/i, responses: [
      "One of the first things to look at is horsepower. Ensure the tractor has enough horsepower for your farming needs.Consider the type of transmission: manual, automatic, or hydrostatic. Each has its benefits.Look at the lifting capacity of the three-point hitch to ensure it can handle your implements.Evaluate comfort features such as cab design, air conditioning, and seat quality if you'll spend long hours operating it."
    ] },
  { pattern: /different manufactures|different brands of tractors/i, responses: [
      "There are several reputable tractor brands, including:1. JOHN DEERE – Known for reliability and advanced technology.2. KUBOTA – Popular for compact tractors and ease of use.3. NEW HOLLAND – Offers a wide range of models suitable for various applications.4. MASSEY FERGUSON – Known for robust performance and durability."
    ] },
  { pattern: /harvesters|harvester/i, responses: [
      "Harvesters are machines used to efficiently gather mature crops from the fields. Could you specify the crop or type?"
    ] },
  { pattern: /types of harvesters/i, responses: [
      "Harvesters come in several types including:1. Combine Harvester – Combines reaping, threshing, and winnowing.2. Forage Harvester – Harvests forage plants for silage.3. Sugarcane Harvester – Specially designed for sugarcane crops.4. Potato Harvester – Lifts potatoes from the soil and separates them."
    ] },
  { pattern: /different manufactures of harvesters|different brands of harvesters/i, responses: [
      "Here are popular brands for harvesters:1. John Deere – Advanced combine harvesters with GPS and automation.2. Case IH – Efficient and high-performance harvesting machines.3. New Holland – Offers a variety of models for different crops.4. CLAAS – Known for high-capacity and precision harvesting.5. Massey Ferguson – Reliable and suitable for mid-sized farms."
    ] },
  { pattern: /mowers|mower/i, responses: [
      "Mowers are machines used to cut grass or crops. They help in maintaining fields and pastures. Would you like to know the different types or brands?"
    ] },
  { pattern: /types of mowers/i, responses: [
      "There are several types of mowers:1. Rotary Mowers – Use fast-spinning blades to cut grass.2. Flail Mowers – Ideal for rough terrain and overgrown areas.3. Sickle Bar Mowers – Use reciprocating blades, great for hay.4. Reel Mowers – Precise cut, used for turfgrass."
    ] },
  { pattern: /plows|plow/i, responses: [
      "Plows are used to break up and turn over soil before planting. They come in different forms depending on soil conditions and crop type."
    ] },
  { pattern: /types of plows/i, responses: [
      "Types of plows include:1. Moldboard Plow – Turns the soil completely, good for deep plowing.2. Disc Plow – Cuts and turns soil using rotating discs.3. Chisel Plow – Loosens soil without turning it over.4. Subsoiler – Breaks up compacted layers deep in the soil.5. Ridge Plow – Forms ridges ideal for specific crops like potatoes."
    ] },
  { pattern: /name/i, responses: ["My name is Randy. How may I assist you?", "I'm called Randy, nice to meet you."] },
  { pattern: /fertilizer/i, responses: [
      "Fertilizers are substances that supply nutrients to plants. Main types include:Nitrogenous Fertilizers, Potassic Fertilizers and Phosphatic Fertilizers . Which one would you like to know more about?"
    ] },
  { pattern: /nitrogenous/i, responses: [
      "Nitrogenous fertilizers provide nitrogen to plants, essential for leaf and stem growth. Examples include Nitrate Fertilizers , Like calcium nitrate and sodium nitrate.Ammonium Fertilizers – Such as ammonium sulfate and ammonium nitrateAmmonium .Nitrate Fertilizers – A mix of nitrate and ammonium nitrogenAmide Fertilizers  Urea is the most common form."
    ] },
  { pattern: /potassic/i, responses: [
      "Potassic fertilizers supply potassium for improving plant strength, disease resistance, and water regulation. Types include:Muriate of Potash (Potassium Chloride),  Sulfate of Potash (Potassium Sulfate)"
    ] },
  { pattern: /chloride|muriate of potash/i, responses: [
      "Muriate of Potash (MOP), also known as potassium chloride, is the most widely used potassium fertilizer. It's cost-effective and contains about 60% potassium."
    ] },
  { pattern: /sulfate|sulphate of potash/i, responses: [
      "Sulfate of Potash (SOP), or potassium sulfate, provides both potassium and sulfur. It’s ideal for sensitive crops and saline soils, though more expensive than MOP."
    ] },
  { pattern: /phosphatic/i, responses: [
      "Phosphatic fertilizers are essential for root development and flower/fruit production. Common types include:Ammonium Phosphate – Like Monoammonium Phosphate (MAP) and Diammonium Phosphate (DAP).Superphosphate – Single and triple variants."
    ] },
  { pattern: /ammonium phosphate/i, responses: [
      "Ammonium phosphate fertilizers include:1. MAP – 11-52-0, highly efficient for early root growth.2. DAP – 18-46-0, widely used for cereals and grains."
    ] },
  { pattern: /diammonium phosphate/i, responses: [
      "Diammonium Phosphate (DAP) is a popular phosphorus fertilizer that also provides nitrogen. It’s highly soluble and ideal for various crops."
    ] },
  { pattern: /superphosphate|concentrated superphosphate/i, responses: [
      "Superphosphate fertilizers include:Single Superphosphate (SSP) – 16-20% P2O5 content and Triple Superphosphate (TSP) – 44-48% P2O5, more concentrated They improve root growth and flowering."
    ] },
  { pattern: /.*/, responses: [
      "Sorry, I didn't understand that. Could you ask something else?",
      "Can you please clarify your question?",
      "I’m not sure what you meant. Could you rephrase?"
    ] },
];

const getResponse = (input) => {
  for (let pair of pairs) {
    if (pair.pattern.test(input)) {
      const responses = pair.responses;
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  return "Sorry, something went wrong.";
};

const Chatbot = () => {
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi, I am Randy. Type your question below." }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    const botResponse = { sender: "bot", text: getResponse(input) };
    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  
  return (
    
  
    <div className="minemine">
      <Navbar/>
        <div style={styles.container} className='row justify-content-center mt-3'>
    
    <h2>Randy the Farming Chatbot</h2>
    <div style={styles.chatBox}>
      {messages.map((msg, i) => (
        <div
          key={i}
          style={{
            ...styles.message,
            alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
            backgroundColor: msg.sender === "user" ? "#d1e7dd" : "#f8d7da",
          }}
        >
          <strong>{msg.sender === "user" ? "You" : "Randy"}:</strong> {msg.text}
        </div>
      ))}
    </div>
    <div style={styles.inputArea}>
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        style={styles.input}
      />
      <button onClick={handleSend} style={styles.button}>Send</button>
    </div>
  </div>

      <Footer/>
    </div>
    
    
  );
};

const styles = {
  container: { maxWidth: 600, margin: "0 auto", fontFamily: "Arial, sans-serif", padding: 20 },
  chatBox: { border: "1px solid #ccc", padding: 10, height: 400, overflowY: "scroll", display: "flex", flexDirection: "column", marginBottom: 10 },
  message: { padding: 10, margin: 5, borderRadius: 10, maxWidth: "80%" },
  inputArea: { display: "flex", gap: 10 },
  input: { flex: 1, padding: 10, borderRadius: 5, border: "1px solid #ccc" },
  button: { padding: "10px 20px", borderRadius: 5, border: "none", backgroundColor: "#28a745", color: "#fff", cursor: "pointer" },
};

export default Chatbot;

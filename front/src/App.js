import React, { useState } from 'react'

const ReceiveMsg = () => {
  const [subTopic, setSubTopic] = useState('')
  const [subTopicInputValue, setSubTopicInputValue] = useState('')

  const submitSubscriptionTopic = event => {
    event.preventDefault()
    setSubTopic(subTopicInputValue)
    console.log(event)
  }
  const changeSubscriptionTopic = event => {
    setSubTopicInputValue(event.target.value)
  }
  return (
    <>
      <h1>Receiving MQTT mesasge</h1>
      <form onSubmit={submitSubscriptionTopic}>
        <label htmlFor="subscriptionTopicInput">Subscription Topic Name</label>
        <br />
        <input
          type="text"
          id="subscriptionTopicInput"
          name="subscriptionTopicInput"
          value={subTopicInputValue}
          onChange={changeSubscriptionTopic}
          required
        ></input>
        <span>Now: {subTopic}</span>
        <br />

        <input type="submit" value="Submit" required></input>
        <br />
        <br />
      </form>
      <textarea rows="20" cols="200" readOnly></textarea>
    </>
  )
}

const SendMsg = () => {
  const [pubTopicName, setPubTopicName] = useState('')
  const [pubTopicMsg, setPubTopicMsg] = useState('')

  const submitPublishMessage = event => {
    event.preventDefault()
    console.log(pubTopicName)
    console.log(pubTopicMsg)
  }
  const changePubTopicName = event => {
    setPubTopicName(event.target.value)
  }
  const changePubTopicMsg = event => {
    setPubTopicMsg(event.target.value)
  }

  return (
    <>
      <h1>Publishing MQTT messages</h1>
      <form onSubmit={submitPublishMessage} id="pubMsgForm">
        <label htmlFor="pubTopicInput">Topic Name</label>
        <br />
        <input
          type="text"
          id="pubTopicInput"
          name="pubTopicInput"
          value={pubTopicName}
          onChange={changePubTopicName}
          required
        ></input>

        <br />
        <label htmlFor="pubMsg">message</label>
        <br />
        <textarea
          rows="4"
          cols="50"
          name="pubMsg"
          form="pubMsgForm"
          value={pubTopicMsg}
          onChange={changePubTopicMsg}
          required
        ></textarea>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  )
}

const App = () => {
  const [subTopic, setSubTopic] = useState('*')
  const [subTopicInputValue, setSubTopicInputValue] = useState('*')

  const submitSubscriptionTopic = event => {
    event.preventDefault()
    setSubTopic(subTopicInputValue)
    console.log(event)
  }
  const changeSubscriptionTopic = event => {
    setSubTopicInputValue(event.target.value)
  }
  return (
    <div>
      <ReceiveMsg />
      <hr />
      <SendMsg />
    </div>
  )
}

export default App

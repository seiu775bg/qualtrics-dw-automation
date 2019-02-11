const _       = require('lodash');
const moment  = require('moment');
const PubSub  = require(`@google-cloud/pubsub`);

const pubsub = new PubSub();

const publisher = pubsub.topic(topicName).publisher();
const params = { task: 'sync_all_surveys_test' };

publisher.publish(dataBuffer, params)
  .then(function(result){
    console.log(`Message ${result} published.`);
  }).catch(err => {
    console.error('ERROR:', err);
  });

import OSS from 'ali-oss';

const OSS_CLIENT = new OSS({
  accessKeyId: 'STS.NTfBptmZWssDH31s1B7Ka6w2Q',
  accessKeySecret: 'HLyb9Wq1KTW9SZfxRpQpsdLqrFuKDPSpKUxsDDgyLHap',
  stsToken:
    'CAISsQJ1q6Ft5B2yfSjIr5fTCcrAgIV2xLGvShWAlzEXO8RN2bKZszz2IHlNeHlrCO0btvk1mWlY7/0clqp0UIQd2JJJyC4qvPpt6gqET9frma7ctM4p6vCMHWyUFGSIvqv7aPn4S9XwY+qkb0u++AZ43br9c0fJPTXnS+rr76RqddMKRAK1QCNbDdNNXGtYpdQdKGHaOITGUHeooBKJXBYz4lUt1D4ns/rlkpLN0HeE0g2mkN1yjp/qP52pY/NrOJpCSNqv1IR0DPGYiXIAsEkXqf8r1vEdqW6c4Mv2BEJK86JS0C1qEhYExmZYEUtac8YsxJCU/XboqDdIs0MOsylXy+dvUSrhSrZyPKer4xtRzw/0jE8C4pkMMwlm33AUWvLFC5lhV3yhAzFKcRcUcgn/F1myQhqAAV3tMK3PUaCB4eYI0CdOLPwJnAQ1W3AH9YmoEXdjLfwa8UQFemFcKyhdHQTchzLDQVbjHa0gcHGPWPGuTIi8+vzLjSHps7flQRc3RPdiYq6ZsLy5KCzEE0S1jAcTQ1yVA5mCbDkG0oolHt5GqveggumJt40OjfLddlg1BM+cRSU/IAA=',
  bucket: 'oss-bz',
  region: 'oss-cn-beijing',
  secure: true,
});

const OSSPage = () => {
  return (
    <input
      type="file"
      onChange={(e) => {
        const file = e.target.files[0];
        const key = `mini/${file.name}`;
        console.log('🚀 ~ Home ~ key:', key);
        OSS_CLIENT.put(key, file)
          .then((result) => {
            console.log('File uploaded successfully:', result);
          })
          .catch((err) => {
            console.error('Error uploading file:', err);
          });
      }}
    />
  );
};

export default OSSPage;

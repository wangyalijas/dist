let baseUrl;
if (process.env.NODE_ENV === 'production') {
  baseUrl = ''; // 生产模式的地址
} else {
  baseUrl = ''; // 开发模式的地址
}

const getUrl = (path) => {
  return baseUrl + path;
};

export default {
  baseUrl,
  homeDataUrl: getUrl('mock/db/data.json'),
  patientInformationUrl: getUrl('mock/db/information.json')
}

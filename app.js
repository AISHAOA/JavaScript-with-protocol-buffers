//1.import protobuf package
const protobuf = require('protobufjs');

//2.load the proto file and the package name
async function run() {
     const root = await protobuf.load('filename.proto');
     const proto = root.lookupType('package.Message');
  
//3.encode your data
  var encodedData = proto.encode({
                         dataDefineInyourMessage: any.value
                    }
                    ).finish();
//4.decode your data
    var decodeData = proto.decode(encodedData);
}

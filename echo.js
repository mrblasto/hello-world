/**
 * Created by jeffreyfried on 2/14/15.
 */

for(var i = 2; i < process.argv.length; i++) {
    process.stdout.write(process.argv[i].toString() + "\n");
}
const { AuthDB, ChatUserDB, MessageDB, SchoolClassDB, initialize } = require('./DB_main.js')
const chalk = require('chalk');

function print_res(data) {console.log(chalk.green(data));}
function print_err(data) {console.log(chalk.red(data));}
// initialize() // ! once, when database is just created! 

/*AuthDB.register({ name: "Miha", surname: "Froll", phone: "1111", password: "aboba"} )
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)});*/

/*AuthDB.login({password: "aboba", phone: "1111"})
    .then(res => {console.log(res)})*/

/*AuthDB.change_password({password: "aboba", new_password: "petuh", phone: "1111"})
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})*/

/*ChatUserDB.manage_chat({name: "test 2", user_id: 5, ph: "" }, "create")
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})*/

/*ChatUserDB.manage_chat({name: "test_rename 2", chat_id: 4, ph: "" }, "rename")
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})*/
    
/*ChatUserDB.manage_chat({user_id: 5, chat_id: 4}, "delete")
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})*/

/*ChatUserDB.manage_user({user_id: 4, chat_id: 3}, "add")
    .then(res => {console.log(chalk.green(res))})
    .catch(err => {console.log(chalk.red(err))})*/

/*ChatUserDB.manage_user({user_id: 5, chat_id: 4}, "leave")
    .then(res => {console.log(chalk.green(res))})
    .catch(err => {console.log(chalk.red(err))})*/

/*ChatUserDB.get_user_info({user_id: 38})
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})*/


console.log(ChatUserDB.get_chat_info({chat_id: 4}))

/*ChatUserDB.check_user_left_ch({user_id: 5, chat_id: 4})
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})*/

/*ChatUserDB.get_user_chats({user_id: 2})
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})*/

/*ChatUserDB.manage_admin({chat_id:4, requester_id: 5, user_id: 13}, "create")
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})*/
// ! chat: 4, user: 5
/*MessageDB.new_msg({chat_id: 4, user_id: 5, text: "aboba"})
    .then(res => {console.log(chalk.green(res))})
    .catch(err => {console.log(chalk.red(err))})*/

/*MessageDB.manage_msgs({msg_id: 2, requester_id: 5, text: "          aboba       "}, "edit")
    .then(res => {print_res(res)})
    .catch(err => {print_err(err)})*/

/*MessageDB.manage_msgs({msg_id: 2, requester_id: 1}, "delete_all")
    .then(res => {print_res(res)})
    .catch(err => {print_err(err)})*/
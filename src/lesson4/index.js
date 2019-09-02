//基本，类型和 undfined、null、 boolean、Number、String 这五种类型是按值访问
//其它引用类型是按地址传递
!function () {
    document.write('undefined == null ' + undefined == null);//false
    document.write('"true" ==true ' + "true" == true);//false;
    var $true = "true";
    var true1 = true;
    document.writeln('<br />');
    document.write($true == true1)//false
    document.write(true == true1)//true


    var person = {

    }
    person.name = 'Kobe';// 引用类型可以动态属性
    document.write(person.name);

    var name = "kobe";
    name.age = 35;   //值类型不允许有动态属性
    document.write('<br />');
    document.write(name.age);//undefined;

    //检查类型 使用typfof

    document.write('</br>');
    document.write(typeof "abc"); //string
    document.write('</br>');
    document.write(typeof 123); //number
    document.write('</br>');
    document.write(typeof false); //boolean
    document.write('</br>');
    document.write(typeof new Date()); //Object
    

}()
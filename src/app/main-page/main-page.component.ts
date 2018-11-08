import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // this.giveClasses();
  }

  show = false;
  modal_title:string;
  modal_text:string;
  modal_url:string;
  menupanel = false;
  modal_object:any;
  show_modal_text = false;
  show_modal_title = false;
  show_modal_image = false;

  @ViewChild('modal') modal;
  // @ViewChild('menu') menu;

  list_of_cards = [
    {
      "image_url":"../assets/img/flag.jpg",
      "date":"1900-1991",
      "name":"Казахстан и новые независимые государства",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz»."
    },
    {
      "image_url":"../assets/img/image_2.png",
      "date":"1900-1991",
      "name":"Казахстан и новые независимые государства",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz»."
    },
    {
      "image_url":"../assets/img/image_1.png",
      "date":"1900-1992",
      "name":"Казахстан и новые независимые государства",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz»."
    },
    {
      "image_url": "../assets/img/image_3.png",
      "date": "1900-1993",
      "name": "Казахстан и новые независимые государства",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz»."
    },
    {
      "image_url":"../assets/img/image_4.png",
      "date":"1900-1994",
      "name":"Казахстан и новые независимые государства",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz»."

    },
    {
      "image_url":"../assets/img/image_1.png",
      "date":"1900-1995",
      "name":"Казахстан и новые независимые государства",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz»."
    }
  ];

  showData(item){
    this.show = !this.show;
    this.modal_object = item;
    console.log(this.modal_object);
    setTimeout(()=>{
      this.show_modal_image = !this.show_modal_image;
    },500);
    setTimeout(()=>{
      this.show_modal_title = !this.show_modal_title;
    },1000)
    setTimeout(()=>{
      this.show_modal_text = !this.show_modal_text;
    },1500);
  }

  disable(){
    this.show = !this.show;
    this.show_modal_image = !this.show_modal_image;
    this.show_modal_title = !this.show_modal_title;
    this.show_modal_text = !this.show_modal_text;
  }

  closeModal(){
    this.disable();
  }

  overlayClicked(e){
      if(e.path.indexOf(this.modal.nativeElement)===-1){
        this.disable();
      }
  }

  showMenu(){
    this.menupanel = !this.menupanel;
    console.log(this.menupanel);
  }

}

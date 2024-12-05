//1-misol
//Funksiya yozing, u berilgan sonning juft yoki toq ekanligini aniqlasin.

function nam1(son) {
  if (son % 2 == 0) {
    return "juft son";
  } else {
    return "toq";
  }
}

//2-misol
//Funksiya yozing, u berilgan sonning musbat, manfiy yoki nol ekanligini aniqlasin.

function nam2(son) {
  if (son == 0) {
    return "nolga teng";
  }
  if (son > 0) {
    return "musbat";
  } else {
    return "musbat";
  }
}

//3-misol
//Funksiya yozing, u berilgan ikki sondan kattasini qaytarsin.

function nam3(son, son1) {
  if (son > son1) {
    return son;
  } else {
    return son1;
  }
}

//4-misol
//Funksiya yozing, u uchta sondan eng kattasini aniqlasin.

function nam4(son, son1, son2) {
  if (son >= son1 && son >= son2) {
    return son;
  } else if (son1 >= son && son1 >= son2) {
    return son1;
  } else {
    return son2;
  }
}

//5-misol
//Funksiya yozing, u berilgan sonning 3 ga bo‘linishini aniqlasin.

function nam5(son) {
  if (son % 3 == 0) {
    return "3ga bolinadi";
  } else {
    return "3ga bolinmaydi";
  }
}

//6-misol
//Funksiya yozing, u berilgan sonning kvadratini qaytarsin.

function nam6(son) {
  if (son) {
    return son ** 2;
  }
}

//7-misol
//Funksiya yozing, u ikki sonning ko‘paytmasini hisoblasin.

function num7(son, son1) {
  if (typeof son == Number && typeof son1 == Number) {
    return son * son1;
  }
}

//8-misol
//Funksiya yozing, u berilgan sonni 1 dan boshlab o‘sha songacha bo‘lgan barcha sonlarning yig‘indisini hisoblasin.

function num8(son) {
  let sum = 0;
  for (let son = 1; son < son; son++) {
    sum += son;
  }
  return sum;
}

//9-misol
//Funksiya yozing, u 1 dan 10 gacha bo‘lgan sonlarning ko‘paytmasini qaytarsin.

function num9() {
  let sum = 1;
  for (let num9 = 1; num9 < 10; num9++) {
    sum *= num9;
  }
  return sum;
}

//10-misol
//Funksiya yozing, u berilgan sondan boshlab 1 ga kamaytirib chiqaradi.

function num10(son) {
  for (let num10 = son; num10 >= 1; num10--) {
    return num10;
  }
}

//11-misol
//Funksiya yozing, u berilgan sonni faqat juft bo‘lsa ekranga chiqaradi.

function num11(son) {
  if (son % 2 == 0) {
    for (let num11 = 2; num11 < son; num11 + 2) {
      return num11;
    }
  }
}

//12-misl
//Funksiya yozing, u berilgan ikki sondan kattasini ternary operator yordamida aniqlasin.

function num12(son, son1) {
  return son > son1 ? console.log(son) : console.log(son1);
}

//13-misol
//Funksiya yozing, u berilgan son 5 ga va 3 ga bo‘linishini tekshiradi.

function num13(son) {
  if (son % 3 == 0 && son % 5 == 0) {
    return "3 va 5 ga bolinadi";
  }
}

//14-misol
//Funksiya yozing, u berilgan sonning kvadrati va kubini qaytaradi.

function num14(son) {
  let sum = son ** 2;
  let sqrt = son ** 3;
  let result = `${sum}, ${sqrt}`;

  return result;
}

//15-misol
//Funksiya yozing, u 1 dan 100 gacha bo‘lgan faqat juft sonlarni ekranga chiqaradi.

function num15() {
  for (let num15 = 2; num15 <= 100; num15 + 2) {
    return num15;
  }
}

//16-misol
//Funksiya yozing, u 1 dan n gacha bo‘lgan toq sonlarni ekranga chiqaradi.

function num16(son) {
  for (let num16 = son; num16 < 1; num16--) {
    if (son % 2 == 1) {
      return num16;
    }
  }
}

//17-misol
//Funksiya yozing, u kiritilgan sonning faktorialini hisoblaydi.

function num17(son) {
  let faktorial = 1;
  for (let num17 = 1; num17 < son; num17++) {
    faktorial *= num17;
  }
  return faktorial;
}

//18-misol
//Funksiya yozing, u kiritilgan sonni 10 ga bo‘lgandagi qoldiqni qaytaradi.

function num18(son) {
  if (typeof son == Number) {
    son = son % 10;
  }
  return son;
}

//19-misol
//Funksiya yozing, u ikki sonni o‘zaro solishtirib, qaysi biri katta ekanligini ekranga chiqaradi.

function num19(son, son1) {
  if (son > son1) {
    return son;
  } else {
    return son1;
  }
}

//20-misol
//Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini qaytaradi.

function num20() {
  let sum20 = 0;
  for (let num20 = 1; num20 < 50; num20++) {
    sum20 += num20;
  }
  return sum;
}

//21-misol
//Funksiya yozing, u berilgan sonning kvadrat ildizini hisoblaydi (math metodlari ishlatilmasin).

function num21(son) {
  return son ** (1 / 2);
}

//22-misol
//Funksiya yozing, u ikkita sonning o‘rta arifmetik qiymatini hisoblaydi.

function num22(son, son1) {
  return (son + son1) / 2;
}

//Funksiya yozing, u berilgan son musbatmi yoki manfiy ekanligini if orqali aniqlasin.

function num23(son) {
  return son > 0 ? "Musbat son" : son < 0 ? "Manfiy son" : "Son nolga teng";
}

//24-misol
//Funksiya yozing, u berilgan sonni juft sonlar yig‘indisini hisoblaydi.

function num24(son) {
  let sum = 0;
  for (let num24 = 1; num24 < son; num24++) {
    if (son % 2 == 0) {
      sum += son;
    }
  }
  return sum;
}

//25-misol
//Funksiya yozing, u ikki sonni qo‘shadi, lekin agar sonlardan biri manfiy bo‘lsa, natijaga 10 qo‘shadi.

function num15(son, son1) {
  let sum = son + son1;
  if (son < 0 || son1 < 0) {
    sum += 10;
  }
  return sum;
}

//26-misol
//Funksiya yozing, u berilgan ikkita sonni qo‘shadi va ko‘paytiradi, natijalarni alohida qaytaradi.

function num26(son, son1) {
  let qosh = son + son1;
  let kop = son * son1;
  let ikki = `${qosh},${kop}`;
  return ikki;
}

//27-misol
//Funksiya yozing, u foydalanuvchi kiritgan son 7 ga bo‘linishini aniqlaydi.

function num27(son) {
  if (son % 7 == 0) {
    return "7ga bolinadi";
  } else {
    return "7ga bolinmaydi";
  }
}

//28-misol
//Funksiya yozing, u berilgan sonni xuddi shu tartibda 10 marta ko‘paytirib chiqaradi.

function num28(son) {
  let sum = 1;
  for (let num28 = 1; num28 < 10; num28++) {
    sum *= num28;
  }
  return sum;
}

//29-misol
//Funksiya yozing, u ikki sonni ko‘paytiradi, lekin agar sonlardan biri 0 bo‘lsa, natija 1 bo‘ladi.

function num29(son, son1) {
  if (son == 0 && son == 0) {
    return 1;
  }
  return son * son1;
}

//30-misol
//Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning modulini hisoblaydi.

function num30(son, son1) {
  let sum = Math.abs(son);
  let sum1 = Math.abs(son1);
  let all = `${son},${son1}`;
  return all;
}

//31-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonni faqat manfiy bo‘lsa ekranga chiqaradi.

function num31(son) {
  if (son < 0) {
    return son;
  } else {
    return "manfiy son kirting";
  }
}

//32-misol
//Funksiya yozing, u 1 dan 100 gacha bo‘lgan sonlardan faqat 5 ga karrali bo‘lganlarni ekranga chiqaradi.

function num32() {
  for (let num32 = 1; num32 < 100; num32++) {
    if (num32 % 5 == 0) {
      return num32;
    }
  }
}

//33-misol
//Funksiya yozing, u berilgan ikki sonning yig‘indisini hisoblaydi, agar natija juft bo‘lsa, "Juft" deb qaytaradi.

function num33(son, son1) {
  let nat = son + son1;
  if (nat % 2 == 0) {
    return "juft";
  }
}

//34-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonning bo‘luvchilarini ekranga chiqaradi.

function nam34(son) {
  for (let num34 = 1; num34 <= son; num34++) {
    if (son % num34 === 0) {
      return num34;
    }
  }
}

//35-misol
//Funksiya yozing, u berilgan sondan kattalik bo‘yicha kichik bo‘lgan barcha toq sonlarni chiqaradi.

function num35(son) {
  for (let num35 = son; num35 >= 1; num35--) {
    if (num35 % 2 == 1) {
      return num35;
    }
  }
}

//36-misol
//Funksiya yozing, u berilgan sonni 1 dan 20 gacha bo‘lgan sonlarga bo‘lib, har birining qoldig‘ini chiqaradi.

function num36(son) {
  for (let num36 = 1; num36 < 20; num36++) {
    let qol = son % num36;
    return qol;
  }
}

//37-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonning barcha bo‘luvchilarini hisoblaydi va yig‘indisini qaytaradi.

function num37(son) {
  let sum = 0;
  for (let num37 = 1; num37 < son; num37++) {
    if (son % num37 == 0) {
      sum += num37;
    }
  }
  return sum;
}

//38-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonni faqat juft bo‘lsa kvadratini hisoblaydi.

function num38(son) {
  if (son % 2 == 0) {
    son = son ** 2;
  }
  return son;
}

//39-misol
//Funksiya yozing, u berilgan son 100 dan katta bo‘lsa, uni ikki barobar oshiradi, aks holda 10 qo‘shadi.

function num39(son) {
  if (son > 100) {
    return son ** 2;
  } else {
    return sun + 10;
  }
}

//40-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonning barcha raqamlarini birma-bir chiqaradi.

function num40(son) {
  let sum40;

  while (son >= 1) {
    sum40 = son % 10;
    son = Math.trunc(son / 10);
  }

  return son;
}

//41-misol
//Funksiya yozing, u foydalanuvchi kiritgan ikki sonning o‘zaro karrali ekanligini aniqlaydi.

function num41(son, son1) {
  if (son % son1 === 0) {
    return `o'zaro karrali`;
  }
  if (son1 % son === 0) {
    return `o'zaro karrali `;
  }

  return "karrali emas";
}

//42-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisini hisoblaydi.

function num42(son) {
  let sum42;

  while (son >= 1) {
    sum42 = sum42 * 10 + (son % 10);
    son = Math.trunc(son / 10);
  }

  return son;
}

//43-misol
//Funksiya yozing, u 1 dan foydalanuvchi kiritgan sondan katta bo‘lgan barcha sonlarni ekranga chiqaradi.

function num43(son) {
  for (let num43 = 1; num43 < son; num43++) {
    return num43;
  }
}

//44-misol
//Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning bo‘linmasini hisoblaydi (qoldiqsiz).

function num44(son, son1) {
  let bol = son / son1;
  if (son / son1) {
    return bol;
  } else {
    return "bqoldiqsiz bolinmaydi";
  }
}

//45-misol
//Funksiya yozing, u 1 dan n gacha bo‘lgan barcha sonlarning kvadratlarini ekranga chiqaradi.

function num45(n) {
  for (let num45 = 1; num45 <= n; num45++) {
    return num45 ** 2;
  }
}

//46-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonning o‘z-o‘ziga karraligini aniqlaydi.(matiqan xato)

//47-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonning har bir raqamini alohida kvadratga oshiradi va chiqaradi.

function num47(son) {
  while (son >= 1) {
    console.log((son % 10) ** 2);
    son = Math.trunc(son / 10);
  }
  return son;
}

//48-misol
//Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning faqat toqlari yig‘indisini hisoblaydi.

function num48() {
  for (let num48 = 1; num48 <= 50; num48++) {
    let sum = 0;
    if (num48 % 2 == 1) {
      sum += num48;
    }
  }
  return sum;
}

//49-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonni teskari tartibda chiqaradi.

function num49(son) {
  let sum49;

  while (son >= 1) {
    sum49 = sum49 * 10 + (son % 10);
    son = Math.trunc(son / 10);
  }

  return son;
}

//50-misol
//Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisi 10 dan katta yoki kichikligini aniqlaydi.

function num50(son) {
  let sum50 = 0;
  while (son >= 1) {
    sum50 += son % 10;
    son = Math.trunc(son / 10);
  }
  if (sum50 > 10) {
    return "10 dan katta ";
  } else {
    return "10 dan kichik";
  }
}


let BILLS = [

]


let USERS = [
  {
    id: 1,
    fullname: 'Nguyễn Phạm',
    email: 'abc@gmail.com',
    phone: '0896359374',
    username: 'nguyen',
    password: '123456',
    cart: [],
  },
]

let CATEGORIES = [
  {
    id: 1,
    name: 'PIZZA',
    img: `/images/home-category1.jpg`,
    description: `Chọn Pizza ưa thích của bạn`,
  },
  {
    id: 2,
    name: 'HAMBURGER',
    img: `/images/home-category2.jpg`,
    description: `Chọn hamburger ưa thích của bạn`,
  },
  {
    id: 3,
    name: 'BÁNH KEM',
    img: `/images/home-category3.jpg`,
    description: `Chọn bánh kem ưa thích của bạn`,
  },
  {
    id: 4,
    name: 'ĐỒ ĂN NHẸ',
    img: '/images/home-category4.jpg',
    description: `Chọn đồ ăn vặt nhẹ thích của bạn`,
  },
]

let PRODUCTS = [
    {
      id: 1,
      name: 'HAMBURGER TÔM',
      sale: 56000,
 
      category: 'HAMBURGER',
      img: '/images/product_burger-tom.jpg'
    },
    {
        id: 2,
        name: 'HAMBURGER GÀ',
        sale: 52000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-ga.jpg',
      },
      {
        id: 3,
        name: 'HAMBURGER BÒ',
        sale: 54000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-bo.jpg',
      },
      {
        id: 4,
        name: 'HAMBURGER BÒ PHOMAI',
        sale: 58000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-bo-phomai.jpg',
      },
      {
        id: 5,
        name: 'HAMBURGER BÒ HOÀNG GIA',
        sale: 60000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-bo-hoang-gia.jpg',
      },
      {
        id: 6,
        name: 'HAMBURGER BÒ 2 LỚP',
        sale: 78000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-bo-2-lop.jpg',
      },
      {
        id: 7,
        name: 'HAMBURGER GÀ 2 LỚP',
        sale: 72000,
   
        category: 'HAMBURGER',
        img: '/images/product-burger-ga-2-lop.jpg',
      },
      {
        id: 8,
        name: 'HAMBURGER CÁ',
        sale: 56000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-ca.jpg',
      },
      {
        id: 9,
        name: 'HAMBURGER GÀ PHOMAI',
        sale: 54000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-ga-phomai.jpg',
      },
      {
        id: 10,
        name: 'HAMBURGER HEO',
        sale: 52000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-heo.jpg',
      },
      {
        id: 11,
        name: 'HAMBURGER JUMBO CHICKEN',
        sale: 58000,
   
        category: 'HAMBURGER',
        img: '/images/product_burger-jumbo-chicken.jpg',
      },
      {
          id: 12,
          name: 'HAMBURGER PHOMAI',
          sale: 40000,
     
          category: 'HAMBURGER',
          img: '/images/product_burger-phomai.jpg',
        },
        // {
        //   id: 13,
        //   name: 'HAMBURGER BÒ 2 LỚP',
        //   sale: 78000,
     
        //   category: 'HAMBURGER',
        //   img: '/images/product_burger-bo-2-lop.jpg',
        // },
        {
          id: 14,
          name: 'HAMBURGER TRỨNG',
          sale: 35000,
     
          category: 'HAMBURGER',
          img: '/images/product_burger-trung.jpg',
        },
        {
          id: 15,
          name: 'HAMBURGER CÁ PHOMAI',
          sale: 55000,
     
          category: 'HAMBURGER',
          img: '/images/product_burger-phile-ca-phomai.jpg',
        },
        {
          id: 16,
          name: 'HAMBURGER THỊT HUN',
          sale: 58000,
     
          category: 'HAMBURGER',
          img: '/images/product-burger-thit-hun.jpg',
        },
        {
          id: 17,
          name: 'PIZZA XÚC XÍCH',
          sale: 200000,
     
          category: 'PIZZA',
          img: '/images/product_pizza-xuc-xich2.jpg',
        },
        {
          id: 18,
          name: 'PIZZA BÒ BẰM',
          sale: 300000,
     
          category: 'PIZZA',
          img: '/images/product_pizza-bo-bam.jpg',
        },
        {
          id: 19,
          name: 'PIZZA HẢI SẢN',
          sale: 350000,
     
          category: 'PIZZA',
          img: '/images/product_pizza-hai-san.jpg',
        },
        {
          id: 20,
          name: 'PIZZA PHOMAI',
          sale: 160000,
     
          category: 'PIZZA',
          img: '/images/product_pizza-phomai.jpg',
        },
        {
            id: 21,
            name: 'PIZZA GÀ PHOMAI',
            sale: 300000,
       
            category: 'PIZZA',
            img: '/images/product_pizza-ga-phomai.jpg',
          },
          {
              id: 22,
              name: 'PIZZA NẤM THỊT NGUỘI',
              sale: 250000,
         
              category: 'PIZZA',
              img: '/images/product_pizza-nam-thit.jpg',
            },
            {
              id: 23,
              name: 'PIZZA RAU CỦ',
              sale: 120000,
         
              category: 'PIZZA',
              img: '/images/product_pizza-rau-cu.jpg',
            },
            {
              id: 24,
              name: 'PIZZA THẬP CẨM',
              sale: 320000,
         
              category: 'PIZZA',          
              img: '/images/product_pizza-thap-cam.jpg',
            },
            {
              id: 25,
              name: 'PIZZA GÀ ỚT XANH',
              sale: 234000,
         
              category: 'PIZZA',
              img: '/images/product_pizza-ga-ot-xanh.jpg',
            },
            {
              id: 26,
              name: 'PIZZA THỊT HUN',
              sale: 250000,
         
              category: 'PIZZA',
              img: '/images/product_pizza-thit-hun-khoi.jpg',
            },
            {
              id: 27,
              name: 'BÁNH KEM BẠC HÀ',
              sale: 120000,
         
              category: 'BÁNH KEM',
              img: '/images/product_banh-kem-bac-ha.jpg',
            },
            {
              id: 28,
              name: 'BÁNH KEM DÂU',
              sale: 130000,
         
              category: 'BÁNH KEM',
              img: '/images/product_banh-kem-dau.jpg',
            },
            {
              id: 29,
              name: 'BÁNH SOCOLA ĐẬU PHỘNG',
              sale: 145000,
         
              category: 'BÁNH KEM',
              img: '/images/product_banh-kem-cholate-dau-phong.jpg',
            },
            {
              id: 30,
              name: 'BÁNH SOCOLA GIÁNG SINH',
              sale: 160000,
         
              category: 'BÁNH KEM',
              img: '/images/product_banh-kem-socola-giang-sinh.jpg',
            },
            {
                id: 31,
                name: 'BÁNH SOCOLA LÚA MẠCH',
                sale: 155000,
           
                category: 'BÁNH KEM',
                img: '/images/product_banh-kem-socola-lua-mach.jpg',
              },
              {
                  id: 32,
                  name: 'BÁNH MỨT',
                  sale: 20000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-banh-mut.jpg',
                },
                {
                  id: 33,
                  name: 'BÁNH TORRIJA',
                  sale: 25000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-banh-torrija.jpg',
                },
                {
                  id: 34,
                  name: 'BÁNH VANI',
                  sale: 26000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-banh-vani.jpg',
                },
                {
                  id: 35,
                  name: 'CHOCOLATE RASPBERRY',
                  sale: 30000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-chocolate-raspberry.jpg',
                },
                {
                  id: 36,
                  name: 'CUPCAKE BẠC HÀ',
                  sale: 28000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-cupcake-bacha.jpg',
                },
                {
                  id: 37,
                  name: 'BÁNH MỨT CHERRY',
                  sale: 20000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-cupcake-cherry.jpg',
                },
                {
                  id: 38,
                  name: 'CUPCAKE KEM TƯƠI',
                  sale: 20000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-cupcake-kem-tuoi.jpg',
                },
                {
                  id: 39,
                  name: 'CUPCAKE VANI DÂU',
                  sale: 24000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-cupcake-vani-dau.jpg',
                },
                {
                  id: 40,
                  name: 'MOCHI KEM TƯƠI',
                  sale: 22000,
             
                  category: 'ĐỒ ĂN NHẸ',
                  img: '/images/product_snack-mochi-kem-tuoi.jpg',
                },
]

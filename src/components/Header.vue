<template>
    <div>
        <div style="font-variant: small-caps; display: flex; justify-content: center; align-items: center; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0); width: 100%; height: 75px;">
            <div style="display: flex; ">
                <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
                <span>
                    версия для слабовидящих
                </span>
            </div>
            <input type="search" style="background-color: rgb(0, 0, 0); border: 1px solid rgb(255, 255, 255); color: rgb(255, 255, 255);" placeholder="Поиск" />
            <span style="margin-left: 10px;">
              eng
            </span>
            <span style="margin-left: 10px; width: 25%;">
                цифровой колледж подмосковья
            </span>
            <div style="display: flex; ">
                <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
                <span>
                    министерство образования московской области
                </span>
            </div>
            <div style="display: flex; ">
                <img src="https://gu-st.ru/content/newportal/mainpage/icon_32/Gov_services.svg" width="45px" alt="">
                <span>
                    минпросвещения россии
                </span>
            </div>
        </div>

        <div style="color: rgb(0, 0, 0); font-variant: small-caps; display: flex; justify-content: center; align-items: center; background-color: rgb(245, 245, 245); width: 100%; height: 200px;">
            <img src="https://tspk-mo.ru/themes/mck/assets/images/logo.png?ec554dd" width="125px" alt="">
            <div style="margin-left: 35px; width: 40%;">
                <span style="font-size: 18px;">
                    Государственное автономное профессиональное образовательное учреждение Московской области
                </span>
                <h4 style="font-weight: 500;">
                    Межрегиональный центр компетенций — Техникум имени С.П. Королева
                </h4>
            </div>
            <div style="margin-left: 75px; font-variant: normal; width: 200px;">
                <div style="display: flex; margin-top: 10px;">
                    <span style="color: rgb(0, 0, 200);" class="material-icons">
                        room
                    </span>
                    <span>
                        Московская область, г. Королев, ул. Молодежная, 7
                    </span>
                </div>
                <div style="display: flex; margin-top: 10px;">
                    <span style="color: rgb(0, 0, 200);" class="material-icons">
                        call
                    </span>
                    <span>
                        +7(495) 516-60-38
                    </span>
                </div>
                <div style="display: flex; margin-top: 10px;">
                    <span style="color: rgb(0, 0, 200);" class="material-icons">
                        email
                    </span>
                    <span>
                        mo_mcktechn@mosreg.ru
                    </span>
                </div>
            </div>
            <img style="margin-left: 35px;" src="https://krasnoselscholnnov.edusite.ru/images/p166_dostupnayasreda.jpg" width="150px" alt="">
        </div>
        
        <div style="display: flex; align-items: center; justify-content: center; background-color: rgb(235, 235, 235); height: 100px; width: 100%;">
            <div style="display: flex; height: 75%; width: 100%; font-variant: small-caps; font-size: 20px; color: rgb(0, 0, 200);">
                <div @mouseenter="hoverEffect($event, false, 'details')" ref="detailsDialog" @mouseleave="hoverEffect($event, true, 'details', 'menu')" style="display: flex; text-align: center; align-items: center; justify-content: center; border-right: 1px solid rgb(0, 0, 200); width: calc(100% / 7); height: 100%;">
                    <span>
                        сведения об организации
                    </span>
                </div>
                <div @mouseenter="hoverEffect($event, false, 'mck')" ref="mckDialog" @mouseleave="hoverEffect($event, true, 'mck', 'menu')" style="display: flex; text-align: center; align-items: center; justify-content: center; border-right: 1px solid rgb(0, 0, 200); width: calc(100% / 7); height: 100%;">
                    <span>
                        мцк
                    </span>
                </div>
                <div @mouseenter="hoverEffect($event, false, 'entrant')" ref="entrantDialog" @mouseleave="hoverEffect($event, true, 'entrant', 'menu')" style="display: flex; text-align: center; align-items: center; justify-content: center; border-right: 1px solid rgb(0, 0, 200); width: calc(100% / 7); height: 100%;">
                    <span>
                        абитуриенту
                    </span>
                </div>
                <div @mouseenter="hoverEffect($event, false, 'student')" ref="studentDialog" @mouseleave="hoverEffect($event, true, 'student', 'menu')" style="display: flex; text-align: center; align-items: center; justify-content: center; border-right: 1px solid rgb(0, 0, 200); width: calc(100% / 7); height: 100%;">
                    <span>
                        студенту
                    </span>
                </div>
                <div @mouseenter="hoverEffect($event, false, 'teacher')" ref="teacherDialog"  @mouseleave="hoverEffect($event, true, 'teacher', 'menu')" style="display: flex; text-align: center; align-items: center; justify-content: center; border-right: 1px solid rgb(0, 0, 200); width: calc(100% / 7); height: 100%;">
                    <span>
                        педагогу
                    </span>
                </div>
                <div @mouseenter="hoverEffect($event, false, 'contacts')" ref="contactsDialog" @mouseleave="hoverEffect($event, true, 'contacts')" style="display: flex; text-align: center; align-items: center; justify-content: center; border-right: 1px solid rgb(0, 0, 200); width: calc(100% / 7); height: 100%;">
                    <span>
                        контакты
                    </span>
                </div>
                <div  @mouseenter="hoverEffect($event, false, 'feedback')" ref="feedbackDialog" @mouseleave="hoverEffect($event, true, 'feedback')" style="display: flex; text-align: center; align-items: center; justify-content: center; width: calc(100% / 7); height: 100%;">
                    <span>
                        обратная связь
                    </span>
                </div>
                
            </div>
        </div>

        <div v-if="teacherToggler"  @mouseleave="hoverEffect($event, true, 'teacher', 'block')" style="color: rgb(0, 0, 255); position: absolute; top: 365px; left: 760px; width: 325px; height: 450px; background-color: rgb(245, 245, 245); overflow-y: scroll; box-shadow: 0 0 10px rgb(175, 175, 175);">
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Документация методической службы
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Структура методической службы
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Повышение квалификации
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Аттестация
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Виртуальный методический кабинет
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Полезные ссылки
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Онлайн заявки, опросы для сотрудников
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Корпоративная почта
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Сетевое хранилище МЦК
                </span>
                <hr />
            </div>
        </div>

        <div v-if="studentToggler"  @mouseleave="hoverEffect($event, true, 'student', 'block')" style="color: rgb(0, 0, 255); position: absolute; top: 365px; left: 585px; width: 325px; height: 450px; background-color: rgb(245, 245, 245); overflow-y: scroll; box-shadow: 0 0 10px rgb(175, 175, 175);">
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Расписание занятий
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Расписание экзаменов
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Заочное отделение
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Дополнительное образование (кружки, секции)
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Библиотека
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Онлайн-заявки, опросы для студентов
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Социально-психологическая служба
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Служба содействия трудоустройства
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Телефон доверия
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Конкурсы и олимпиады
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    World Skills
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Стипендии и другие виды материальной поддержки
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Студенческое самоуправление
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Документация для студентов
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Для родителей
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    О переводе, восстановлениии отчислении студентов
                </span>
                <hr />
            </div>
        </div>

        <div v-if="entrantToggler"  @mouseleave="hoverEffect($event, true, 'entrant', 'block')" style="color: rgb(0, 0, 255); position: absolute; top: 365px; left: 410px; width: 325px; height: 450px; background-color: rgb(245, 245, 245); overflow-y: scroll; box-shadow: 0 0 10px rgb(175, 175, 175);">
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Приёмная коммисия
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Дни открытых дверей
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Контрольные цифры приёма на 2021-2022
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Правила приёма
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Перечень профессий и специальностей
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Вступильные испытания
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Документы для поступления
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Заочное отделение
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Рейтинг абитуриентов 2021-2022
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Приказы о зачислении
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Электронная форма подачи заявления на поступление
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Прейскурант платных образовательных услуг
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Вакантные места для приёма(перевода)
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Общежитие
                </span>
                <hr />
            </div>
        </div>

        <div v-if="mckToggler"  @mouseleave="hoverEffect($event, true, 'mck', 'block')" style="color: rgb(0, 0, 255); position: absolute; top: 365px; left: 235px; width: 325px; height: 450px; background-color: rgb(245, 245, 245); overflow-y: scroll; box-shadow: 0 0 10px rgb(175, 175, 175);">
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Документация методической службы
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Структура методической службы
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Повышение квалификации
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Аттестация
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Виртуальный методический кабинет
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Полезные ссылки
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Онлайн заявки, опросы для сотрудников
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Корпоративная почта
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Сетевое хранилище МЦК
                </span>
                <hr />
            </div>
        </div>

        <div v-if="detailsToggler"  @mouseleave="hoverEffect($event, true, 'details', 'block')" style="color: rgb(0, 0, 255); position: absolute; top: 365px; left: 65px; width: 325px; height: 450px; background-color: rgb(245, 245, 245); overflow-y: scroll; box-shadow: 0 0 10px rgb(175, 175, 175);">
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Документация методической службы
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Структура методической службы
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Повышение квалификации
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Аттестация
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Виртуальный методический кабинет
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Полезные ссылки
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Онлайн заявки, опросы для сотрудников
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Корпоративная почта
                </span>
                <hr />
            </div>
            <div>
                <span style="font-size: 13px; font-weight: bolder;">
                    Сетевое хранилище МЦК
                </span>
                <hr />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            detailsToggler: false,
            mckToggler: false,
            entrantToggler: false,
            studentToggler: false,
            teacherToggler: false,
            contactsToggler: false,
            feedbackToggler: false,
        }
    },
    methods: {
        hoverEffect(event, toggle, block, type){
            if(block.includes("contacts")){
                if(toggle){
                    this.contactsToggler = false
                    this.$refs.contactsDialog.style.color = `
                        rgb(0, 0, 255)
                    `
                    this.$refs.contactsDialog.style.backgroundColor = `
                        transparent
                    `
                } else if(!toggle){
                    this.contactsToggler = true
                    this.$refs.contactsDialog.style.color = `
                        rgb(255, 255, 255)
                    `
                    this.$refs.contactsDialog.style.backgroundColor = `
                        rgb(0, 0, 150)
                    `
                }
            } else if(block.includes("feedback")){
                if(toggle){
                    this.feedbackToggler = false
                    this.$refs.feedbackDialog.style.color = `
                        rgb(0, 0, 255)
                    `
                    this.$refs.feedbackDialog.style.backgroundColor = `
                        transparent
                    `
                } else if(!toggle){
                    this.feedbackToggler = true
                    this.$refs.feedbackDialog.style.color = `
                        rgb(255, 255, 255)
                    `
                    this.$refs.feedbackDialog.style.backgroundColor = `
                        rgb(0, 0, 150)
                    `
                }
            } else if(block.includes("details")){
                if(toggle){
                    if(type.includes('block')){
                        this.detailsToggler = false
                    }
                    this.$refs.detailsDialog.style.color = `
                        rgb(0, 0, 255)
                    `
                    this.$refs.detailsDialog.style.backgroundColor = `
                        transparent
                    `
                } else if(!toggle){
                    this.detailsToggler = true
                    this.$refs.detailsDialog.style.color = `
                        rgb(255, 255, 255)
                    `
                    this.$refs.detailsDialog.style.backgroundColor = `
                        rgb(0, 0, 150)
                    `
                }
            } else if(block.includes("mck")){
                if(toggle){
                    if(type.includes('block')){
                        this.mckToggler = false
                    }
                    this.$refs.mckDialog.style.color = `
                        rgb(0, 0, 255)
                    `
                    this.$refs.mckDialog.style.backgroundColor = `
                        transparent
                    `
                } else if(!toggle){
                    this.mckToggler = true
                    this.$refs.mckDialog.style.color = `
                        rgb(255, 255, 255)
                    `
                    this.$refs.mckDialog.style.backgroundColor = `
                        rgb(0, 0, 150)
                    `
                }
            } else if(block.includes("entrant")){
                if(toggle){
                    if(type.includes('block')){
                        this.entrantToggler = false
                    }
                    this.$refs.entrantDialog.style.color = `
                        rgb(0, 0, 255)
                    `
                    this.$refs.entrantDialog.style.backgroundColor = `
                        transparent
                    `
                } else if(!toggle){
                    this.entrantToggler = true
                    this.$refs.entrantDialog.style.color = `
                        rgb(255, 255, 255)
                    `
                    this.$refs.entrantDialog.style.backgroundColor = `
                        rgb(0, 0, 150)
                    `
                }
            } else if(block.includes("student")){
                if(toggle){
                    if(type.includes('block')){
                        this.studentToggler = false
                    }
                    this.$refs.studentDialog.style.color = `
                        rgb(0, 0, 255)
                    `
                    this.$refs.studentDialog.style.backgroundColor = `
                        transparent
                    `
                } else if(!toggle){
                    this.studentToggler = true
                    this.$refs.studentDialog.style.color = `
                        rgb(255, 255, 255)
                    `
                    this.$refs.studentDialog.style.backgroundColor = `
                        rgb(0, 0, 150)
                    `
                }
            } else if(block.includes("teacher")){
                if(toggle){
                    if(type.includes('block')){
                        this.teacherToggler = false
                    }
                    this.$refs.teacherDialog.style.color = `
                        rgb(0, 0, 255)
                    `
                    this.$refs.teacherDialog.style.backgroundColor = `
                        transparent
                    `
                } else if(!toggle){
                    this.teacherToggler = true
                    this.$refs.teacherDialog.style.color = `
                        rgb(255, 255, 255)
                    `
                    this.$refs.teacherDialog.style.backgroundColor = `
                        rgb(0, 0, 150)
                    `
                }
            }
            
        }
    }
}
</script>

<style>

</style>
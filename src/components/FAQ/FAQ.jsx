import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./FAQ.module.css"
import AccordionCard from "./Question/Q&A/AccordionCard";


export default class FAQ extends React.Component {
    render() {
        return (
            <div className={styles.outsideContainer}>
                <h2 className={styles.mainTitle}>FAQ</h2>
                <Accordion defaultActiveKey={1}>
                    <AccordionCard keyy={1}
                                   question={"Кто непосредственно занимается поддержкой?"}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                                   " Maecenas luctus bibendum pharetra. Morbi porta, felis sit amet porta."}
                    />
                    <AccordionCard keyy={2}
                                   question={"Как организована работа поддержки? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec quam tincidunt, aliquet libero id, suscipit mauris. Duis vitae consequat justo, ac vestibulum justo." +
                                   " Nunc volutpat odio sit amet convallis sollicitudin. Donec vitae risus erat. Nullam vel dignissim risus. Morbi consectetur nunc non aliquet faucibus. " +
                                   "Curabitur rhoncus sodales turpis, euismod ullamcorper sapien commodo volutpat. Sed diam elit, auctor eget sollicitudin sed, vehicula pellentesque nulla." +
                                   " Quisque massa neque, pulvinar eget malesuada id, faucibus id orci. Vivamus consectetur gravida gravida."}
                    />
                    <AccordionCard keyy={3}
                                   question={"Что происходит, когда отработаны все предоплаченные часы за месяц? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, efficitur id dapibus vel, vestibulum et odio. Maecenas felis ipsum, sollicitudin vel condimentum porta, tincidunt quis elit. Cras scelerisque suscipit sem, in aliquet mauris malesuada a. Integer tempor ipsum ac volutpat lacinia." +
                                   " Aenean tincidunt sodales massa sodales ullamcorper. Vivamus euismod nec turpis sollicitudin commodo. Etiam vitae ante mi. Suspendisse ultrices rhoncus pharetra." +
                                   " Fusce id ex lectus. Cras aliquam metus ac orci ullamcorper condimentum eu at arcu. Nunc porta tellus risus, in tincidunt tellus pellentesque fringilla." +
                                   " Integer mollis porta neque molestie ultricies. Vestibulum quis nisl augue. Donec sed tellus eu lorem luctus varius. Nulla pharetra erat sit amet ligula iaculis venenatis."}
                    />
                    <AccordionCard keyy={4}
                                   question={"Что происходит, когда не отработаны все предоплаченные часы за месяц? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis risus diam, tristique accumsan nisi lacinia ut. Duis varius ut leo eget ultricies. Nulla gravida leo dui, nec consectetur mauris finibus eget. Maecenas felis sapien, sollicitudin eget ex eget, egestas convallis ante. Aliquam erat volutpat." +
                                   " Sed cursus erat turpis, sed rhoncus massa commodo sed. Curabitur ultricies est sit amet ligula iaculis rutrum. Vestibulum elementum velit ut ex blandit, nec hendrerit urna ullamcorper." +
                                   " Quisque mattis dapibus lacinia. Donec porttitor sapien vitae turpis pellentesque eleifend. Mauris lectus arcu, efficitur ac sodales nec, semper in magna."}
                    />
                    <AccordionCard keyy={5}
                                   question={"Как происходит оценка и согласование планируемого времени на выполнение заявок?"}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus mattis dolor, id faucibus tortor sollicitudin vel. Donec consectetur ex diam, a aliquet est molestie eget. Suspendisse fermentum massa nibh, et maximus quam accumsan non. Aliquam non orci faucibus, pretium felis eu, sagittis lacus." +
                                   " Praesent non quam eget lorem ullamcorper dignissim id vitae sem. Curabitur vitae leo et sapien ultricies maximus. Maecenas eleifend massa turpis," +
                                   " sit amet mattis enim porttitor quis. Cras quis eros vel nulla venenatis viverra. Nullam facilisis rhoncus feugiat. Maecenas nec eros nec mauris luctus dignissim id tincidunt mauris." +
                                   " Nam pellentesque lorem et dolor ultrices, vitae porttitor dolor malesuada."}
                    />
                    <AccordionCard keyy={6}
                                   question={"Сколько программистов выделяется на проект? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit ipsum vel turpis fringilla hendrerit. Maecenas feugiat auctor vehicula. " +
                                   " Phasellus quis vestibulum leo. Mauris mollis nibh massa," +
                                   " ut molestie sapien interdum egestas. Mauris venenatis, quam sed posuere feugiat, dolor purus lobortis neque," +
                                   " vitae efficitur est lorem quis dolor. Vivamus accumsan rhoncus leo, in porta diam venenatis eget. Mauris consectetur ipsum vitae massa mollis, et egestas massa ullamcorper." +
                                   " Morbi eu commodo ex. Ut rutrum nisl dui, nec pharetra lorem consequat quis. Nulla eget eros eu leo lobortis fringilla. Suspendisse ullamcorper nec eros vitae viverra." +
                                   " Integer orci lorem, tincidunt eget erat in, vehicula eleifend mi. Interdum et malesuada fames ac ante ipsum primis in faucibus."}
                    />
                    <AccordionCard keyy={7}
                                   question={"Как подать заявку на внесение изменений на сайте? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, tellus non iaculis consequat, quam nunc imperdiet massa, eu porta turpis lacus et dolor." +
                                   " Nunc lorem elit, bibendum ut tempor quis, semper eleifend elit. Donec vel pharetra tortor. Mauris fermentum, ligula iaculis dignissim fermentum," +
                                   " turpis libero lobortis felis, in rhoncus nisl sem vel orci. Vivamus at risus tristique, tincidunt arcu vitae, auctor erat. Vestibulum non consectetur velit." +
                                   " Nullam convallis magna nisi, ut pellentesque massa cursus eget. Sed tempus libero non massa sagittis tristique. Aenean accumsan porta tempor."}
                    />
                    <AccordionCard keyy={8}
                                   question={"Как подать заявку на добавление пользователя, изменение настроек веб-сервера " +
                                   "и других задач по администрированию? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis elit. Vestibulum vitae sem finibus, pharetra diam in, vulputate odio." +
                                   " Mauris maximus nunc et placerat tincidunt. Aliquam ultricies quam ut leo mattis blandit. Aliquam erat volutpat. Fusce at nulla aliquam, volutpat magna et," +
                                   " mattis purus. Curabitur hendrerit eu est sit amet sodales. Nam at est id lorem scelerisque posuere."}
                    />
                    <AccordionCard keyy={9}
                                   question={"В течение какого времени начинается работа по заявке? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis elit. Vestibulum vitae sem finibus, pharetra diam in, vulputate odio." +
                                   " Mauris maximus nunc et placerat tincidunt. Aliquam ultricies quam ut leo mattis blandit. Aliquam erat volutpat. Fusce at nulla aliquam, volutpat magna et," +
                                   " mattis purus. Curabitur hendrerit eu est sit amet sodales. Nam at est id lorem scelerisque posuere."}
                    />
                    <AccordionCard keyy={10}
                                   question={"В какое время работает поддержка? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit neque, finibus ac commodo vel, ultricies et velit. Pellentesque habitant morbi " +
                                   "tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur faucibus a lectus at sagittis. Duis placerat sapien vel condimentum posuere. " +
                                   "Nam iaculis, arcu convallis aliquet molestie, lorem orci varius elit, a facilisis nibh est quis odio. Duis maximus sem augue, at mollis tellus vehicula vitae. " +
                                   "Duis nulla mi, pretium nec diam non, tempor auctor turpis. Nunc in erat lacus."}
                    />
                    <AccordionCard keyy={11}
                                   question={"Подходят ли услуги поддержки, если необходимо произвести обновление ядра Drupal или модулей? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit neque, finibus ac commodo vel, ultricies et velit. Pellentesque habitant morbi " +
                                   "tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur faucibus a lectus at sagittis. Duis placerat sapien vel condimentum posuere. " +
                                   "Nam iaculis, arcu convallis aliquet molestie, lorem orci varius elit, a facilisis nibh est quis odio. Duis maximus sem augue, at mollis tellus vehicula vitae. " +
                                   "Duis nulla mi, pretium nec diam non, tempor auctor turpis. Nunc in erat lacus."}
                    />
                    <AccordionCard keyy={12}
                                   question={"Можно ли пообщаться со специалистом голом или в мессенджере? "}
                                   answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt tellus nec nibh egestas dapibus. Integer ligula ipsum, congue id magna sed, " +
                                   "scelerisque ultrices neque. Fusce vehicula aliquam sagittis. Morbi non neque consectetur, ornare leo eget, lobortis mauris. In rhoncus eleifend lorem eleifend condimentum. " +
                                   "Cras lectus nunc, luctus vitae laoreet at, facilisis at velit. Fusce egestas nulla a euismod eleifend. Proin a mauris eget neque viverra efficitur tempor et nulla. " +
                                   "Ut gravida orci a egestas pharetra. Suspendisse potenti. In porttitor sagittis eros, id faucibus dui tempus in. Fusce ac sem vitae metus iaculis faucibus. Nunc turpis massa, " +
                                   "facilisis et felis non, mollis sollicitudin neque."}
                    />
                </Accordion>
            </div>
        )
    }
}
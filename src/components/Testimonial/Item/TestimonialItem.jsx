import React from "react";

const clientImageLink = `${process.env.PUBLIC_URL}/images/logo-0.png`

const clientText = "Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый \"быстрый\" тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!"

const clientSign = "С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм»"

export default class TestimonialItem extends React.Component {

    textStyle = {
        fontSize: 14,
        lineHeight: 1.15,
        fontWeight: "bold"
    }

    signStyle = {
        color: "gray",
        fontSize: "14px",
        fontWeight: 500
    }

    linkStyle = {
        textDecoration: "underline",
        color: "black",
        fontWeight: 400
    }

    render() {
        return (
            <div className="px-2 py-2">
                <img src={clientImageLink} className="py-3"/>
                <p style={this.textStyle} className="pt-3 pb-1">
                    {clientText}
                </p>
                <p style={this.signStyle}>
                    {clientSign}
                    {this.props.link && <a href={this.props.link} style={this.linkStyle}> {this.props.link}</a>}
                </p>
            </div>
        )
    }
}
import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center mb-12">{t("aboutUs")}</h1>

        <div className="max-w-4xl mx-auto">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Studio Team"
            className="w-full h-64 md:h-96 object-cover mb-12 rounded-lg shadow-md"
          />

          <div className="space-y-8 text-lg md:text-xl">
            <p>{t("aboutDescription1")}</p>
            <p>{t("aboutDescription2")}</p>
            <p>{t("aboutDescription3")}</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-16 mb-12 text-center">{t("ourTeam")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <TeamMember name={t("teamMember1Name")} role={t("teamMember1Role")} />
            <TeamMember name={t("teamMember2Name")} role={t("teamMember2Role")} />
          </div>
        </div>
      </div>
    </div>
  )
}

const TeamMember = ({ name, role }) => (
  <div className="text-center">
    <img
      src="/placeholder.svg?height=300&width=300"
      alt={name}
      className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
    />
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <p className="text-xl text-gray-600">{role}</p>
  </div>
)

export default AboutPage


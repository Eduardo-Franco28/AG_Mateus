import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen(){
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.greeting}>Bem-vindo 👋</Text>
                <Text style={styles.subtitle}>Pronto para mais um dia dando seu melhor?</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.quoteSymbol}>"</Text>
                <Text style={styles.quote}>
                    Quando sua mente sabe que você não vai desistir de algo, ela vai tentar achar mais! STAY HARD.
                </Text>
                <Text style={styles.quoteAuthor}>— David Goggins</Text>
            </View>

            <View style={styles.tipsContainer}>
                <Text style={styles.tipsTitle}>Para hoje</Text>

                <View style={styles.tipItem}>
                    <Text style={styles.tipIcon}>🎯</Text>
                    <Text style={styles.tipText}>Supere seus limites</Text>
                </View>

                <View style={styles.tipItem}>
                    <Text style={styles.tipIcon}>💪</Text>
                    <Text style={styles.tipText}>DGV - DON'T GIVE UP</Text>
                </View>

                <View style={styles.tipItem}>
                    <Text style={styles.tipIcon}>🔥</Text>
                    <Text style={styles.tipText}>STAY HARD MOTHERFUCKER</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Que Deus abençoe sua família professor.</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 28,
        paddingTop: 72,
        paddingBottom: 40,
        gap: 28,
    },
    header: {
        gap: 6,
    },
    greeting: {
        fontSize: 32,
        fontWeight: "700",
        color: "#111827",
    },
    subtitle: {
        fontSize: 16,
        color: "#6B7280",
        fontWeight: "400",
    },
    card: {
        backgroundColor: "#4F46E5",
        borderRadius: 20,
        padding: 28,
        gap: 12,
        shadowColor: "#4F46E5",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    quoteSymbol: {
        fontSize: 48,
        color: "rgba(255,255,255,0.3)",
        lineHeight: 40,
        fontWeight: "700",
    },
    quote: {
        fontSize: 17,
        color: "#FFFFFF",
        lineHeight: 26,
        fontWeight: "500",
    },
    quoteAuthor: {
        fontSize: 13,
        color: "rgba(255,255,255,0.65)",
        fontWeight: "400",
        textAlign: "right",
    },
    tipsContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 20,
        gap: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    tipsTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 4,
    },
    tipItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    tipIcon: {
        fontSize: 22,
    },
    tipText: {
        fontSize: 15,
        color: "#374151",
        fontWeight: "400",
        flex: 1,
    },
    footer: {
        alignItems: "center",
        marginTop: "auto",
    },
    footerText: {
        fontSize: 14,
        color: "#9CA3AF",
        fontWeight: "500",
    },
});
import streamlit as st
from exercises import exercises

st.set_page_config(page_title="تطبيق العناية بالركبة")


st.markdown(
    "<h1 style='text-align: center; color: #4CAF50;'>🦵تطبيق العناية بالركبة</h1>",
    unsafe_allow_html=True
)

st.markdown(
    "<h1 style='text-align: center; color: #4CAF50;'>التمارين</h1>",
    unsafe_allow_html=True
)

col1, col2 = st.columns(2)

mid = len(exercises) // 2

# Left column
with col1:
    for ex in exercises[:mid]:
        with st.expander(ex["الاسم"]):
            st.write(f"**الصعوبة:** {ex['الصعوبة']}")
            st.write(f"**العدات:** {ex['العدات']}")

            st.subheader("الفوائد")
            for benefit in ex["الفوائد"]:
                st.write(f"✅ {benefit}")

            st.subheader("التعليمات")
            for i, step in enumerate(ex["التعليمات"], start=1):
                st.write(f"{i}. {step}")

# Right column
with col2:
    for ex in exercises[mid:]:
        with st.expander(ex["الاسم"]):
            st.write(f"**الصعوبة:** {ex['الصعوبة']}")
            st.write(f"**العدات:** {ex['العدات']}")

            st.subheader("الفوائد")
            for benefit in ex["الفوائد"]:
                st.write(f"✅ {benefit}")

            st.subheader("التعليمات")
            for i, step in enumerate(ex["التعليمات"], start=1):
                st.write(f"{i}. {step}")
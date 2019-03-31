export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
      // 实现刷新还是原本的城市
    } catch (e) {}
  }
}

function localtunnel {
  lt -s kljhfv78ayre4jghxxsdsdfjvcfvy --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
